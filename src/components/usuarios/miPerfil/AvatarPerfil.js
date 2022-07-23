import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useForm } from "../../../hooks/useForm";
import { url, getUrlImagen } from '../../../helpers/api'
import { setMiPerfil } from '../../../actions/configuracion';
import { getData } from '../../../helpers/api';
import axios from 'axios'

export const AvatarPerfil = () => {

    const dispatch = useDispatch();
    const { miPerfil } = useSelector(state => state.configuracion);
    const [formValues, handleInputChange,reset] = useForm({...miPerfil});
    const { name, email} = formValues;
    const [archivo, setArchivo] = useState('');

    const handleChange = file => {
        setArchivo(file[0]);
    }

    useEffect(() => {

        axios.get(getData('auth/user', ''))
            .then(user => {

                dispatch(setMiPerfil(user.data.data))
            }).catch(error => {
                console.log(error)
            })

    }, []);

    const update = async (e) => {
        e.preventDefault();

        const f = new FormData();
        // for (let i = 0; i < archivos.length; i++) {
        //     f.append("files", archivos[i]);

        // }
        f.append("file", archivo)

        const tenant = 1;

        axios.post(`${url('empresas/update/tenant')}/${tenant}`, f,
            {
                Headers: {
                    'Content-Type': 'multipart/form-data',

                },
            })
            .then(empresa => {
                dispatch(setMiPerfil(empresa.data.data))
            }).catch(error => {
                console.log(error.response)
                dispatch(setMiPerfil(error.response.data.data))
            })

    }

    return (
        <article className="card__profile">
            <header className="card__header">
                <img src='dist/img/photo1.png' alt="pattern card" className="card__header-image" />
                {/* <img src='dist/img/user2-160x160.jpg' alt="profile image" className="card__header-profile" /> */}
            </header>
            <section className="card__body">
                <h5 className="card__text card__text--light">
                    Nombre perfil
                    {/* <span className="card__text card__text--light">26</span> */}
                </h5>
                <p className="card__text card__text--light">Rol user</p>
            </section>
            <footer className="card__footer">
                <div className="card__stats">

                    <form className='form' onSubmit={update}>

                        <div className="input-group  mt-4">
                            <div className="col-7">
                                <input type="file" name="file" onChange={(e) => handleChange(e.target.files)} className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                                <label className="custom-file-label" htmlFor="inputGroupFile04">Elegir imagen</label>
                            </div>

                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="submit" id="inputGroupFileAddon04">Subir imagen</button>
                            </div>
                        </div>
                    </form>

                    <p className="card__text card__text--light--subtitulo">Solo se permite JPG, GIF o PNG. Maximo tamaño 800K</p>
                </div>
            </footer>
        </article>
    )
}
