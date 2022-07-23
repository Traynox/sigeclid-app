import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startLogin,setLogin, setLogged } from '../../actions/login'
import { setAuth,getUser } from "../../actions/login";

// import '../../styles/CSSTheme/pages/auth.css';
export const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigate=useNavigate();
   
    const {login } = useSelector(state => state.auth);

    const [formValues, handleInputChange, reset] = useForm({ ...login });
    const { email, password } = formValues;


    useEffect(() => {

        dispatch(setLogin({ ...formValues }));

    }, [formValues, dispatch]);

    const logged=async (e)=>{
        e.preventDefault();
        dispatch(startLogin(login));
       
        navigate('/citas',{replace:true});
        }
  return (
 
    <div id='auth'>

    <div className="row h-100">
        <div className="col-lg-5 col-12">
            <div id="auth-left">
                <div className="auth-logo">
                    <a href="index.html"><img src="" alt="Logo"/></a>
                </div>
                <h1 className="auth-title">Log in.</h1>
                <p className="auth-subtitle mb-5">Log in with your data that you entered during registration.</p>

                <form  onSubmit={logged}>
                    <div className="form-group position-relative has-icon-left mb-4">
                        <input type="text" name="email" value={email} onChange={handleInputChange} className="form-control form-control-xl" placeholder="Email"/>
                        <div className="form-control-icon">
                            {/* <i className="bi bi-person"></i> */}
                          
                        </div>
                    </div>
                    <div className="form-group position-relative has-icon-left mb-4">
                        <input type="password" name="password" value={password} onChange={handleInputChange} className="form-control form-control-xl" placeholder="Password"/>
                        <div className="form-control-icon">
                            {/* <i className="bi bi-shield-lock"></i> */}
                          
                        </div>
                    </div>
                    
                    <button type='submit' className="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
                </form>
                <div className="text-center mt-5 text-lg fs-4">
                    <p className="text-gray-600">Don't have an account? <a href="auth-register.html"
                            className="font-bold">Sign
                            up</a>.</p>
                    <p><a className="font-bold" href="auth-forgot-password.html">Forgot password?</a>.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
            <div id="auth-right">

            </div>
        </div>
    </div>

</div>

  )
}
