import React, { useEffect,useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { url,getUrlImagen } from '../../../helpers/api'
import { setMiClinica } from '../../../actions/configuracion';
import { getData } from '../../../helpers/api';
import axios from 'axios'

export const AvatarForm = () => {

    const { miClinica } = useSelector(state => state.configuracion);
    
    const { id_tenant } = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [archivo,setArchivo]=useState('');

    const handleChange=file=>{
        setArchivo(file[0]);
    }
 
    useEffect(() => {

        axios.get(getData('empresas', id_tenant))
            .then(empresa => {

                dispatch(setMiClinica(empresa.data.data))
            }).catch(error => {
                console.log(error)
            })
          
    }, []);

    const update = async (e) => {
        e.preventDefault();

        const f=new FormData();
        // for (let i = 0; i < archivos.length; i++) {
        //     f.append("files", archivos[i]);
            
        // }
        f.append("file",archivo)
     
        axios.post(`${url('empresas/update/tenant')}/${id_tenant}`,f,
        {
            Headers: {
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'multipart/form-data',
             
            },
          })
            .then(empresa => {
                dispatch(setMiClinica(empresa.data.data))
            }).catch(error => {
                console.log(error.response)
                dispatch(setMiClinica(error.response.data.data))
            })

    }


    return (
        <article className="card__profile">
            <header className="card__header">
                <img src={getUrlImagen(miClinica.imagen)} alt="pattern card" className="card__header-image" />
                {/* <img src={getUrlImagen(miClinica.imagen)} alt="profile image" className="card__header-profile" /> */}
            </header>
            <section className="card__body">
                <h5 className="card__text card__text--light">
                    CLINICA DENTAL
                    {/* <span className="card__text card__text--light">26</span> */}
                </h5>
                <p className="card__text card__text--light">SIQUIRRES</p>
            </section>
            <footer className="card__footer">

                <form className='form' onSubmit={update} >

                    <div className="card__stats">

                        <div className="input-group  mt-4">
                            <div className="col-7">
                                <input type="file" name="file" onChange={(e)=>handleChange(e.target.files)} className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                                <label className="custom-file-label" htmlFor="inputGroupFile04">Elegir imagen</label>
                            </div>

                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="submit" id="inputGroupFileAddon04">Subir imagen</button>
                            </div>
                        </div>

                        {/* <button className=" btn btn-primary btn-md mt-2" type='submit'>Actualizar foto</button> */}
                        <p className="card__text card__text--light--subtitulo">Solo se permite JPG, GIF o PNG. Maximo tamaño 800K</p>
                    </div>
                </form>

            </footer>
        </article>

    )
}
  // <div className='card'>
        //     <div className='card-body'>
        //         <h4 className='card-header'> Detalles de empresa </h4>
        //         <div className=''>
        //             <div className="d-flex align-items-center flex-wrap">
        //                 <div className=" avatar avatar-xl me-5">
        //                     <img src='../../../../src/styles/CSSTheme/images/faces/3.jpg' alt="Imagen empresa" />
        //                 </div>
        //                 <div className="d-flex align-items-start align-items-sm-start flex-column">

        //                     <button className="btn btn-primary btn-md mt-2">Actualizar imagen</button>

        //                     <h6 className='text' style={{padding:'0', margin:'0', marginTop:'15px'}}>Solo se permite JPG, GIF o PNG. Maximo tamaño 800K</h6>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>