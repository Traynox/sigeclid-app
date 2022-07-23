import React,{useEffect} from 'react'
import { InfoForm } from './forms/InfoForm'
import { AvatarForm } from './forms/AvatarForm'
import '../../styles/components/configuracion/configuracion-styles.css';
import { setMiClinica,setMiActive } from '../../actions/configuracion';
import { getData } from '../../helpers/api';
import { useDispatch } from 'react-redux';
import axios from 'axios'
export const ConfigScreen = () => {

 

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1 className='m-4'>Configuración</h1>
            </div>
            <div className='container'>
                <div className="row  jus">
                    <div className="col-md-12 col-sm-12">
                        <AvatarForm />
                        <InfoForm />
                    </div>
                </div>
            </div>
        </>
    )
}
