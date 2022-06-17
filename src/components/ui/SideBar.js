import React, { useState } from "react";
import '../../styles/components/sidebar/sidebar-style.css'
// import imagen from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import { SiderbarData } from "./SidebarData";

export const SideBar = () => {

    const [isToggle, setIsToggle] = useState(false);

    const logo = require('../../assets/img/logo.png');
    // Poner el logo que es de sigeclid

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

 

  return (
    <>
    <nav className={`sidebar ${isToggle ? 'close' : ""}`}>
        <header>
            <div className="image-text">
                <span className="image">
                    <img src={logo} alt="nada" />
                </span>

                <div className="text logo-text">
                    <span className="name">SIGECLID</span>
                    <span className="profession">Rapido & Facil xD</span>
                </div>
            </div>

            <i className="bx bx-chevron-right toggle" onClick={handleToggle} ></i>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <li className="search-box" >
                    <i className='bx bx-search icon' onClick={handleToggle}></i>
                    <input type="text" placeholder="Search..." />
                </li>

                <ul className="menu-links">

                {SiderbarData.map((item, index) => {
                return (
                <li key={index} className={`${item.cName} ` } >
                    <Link to={item.path} className="nav-link">
                    {item.icon}
                    <span className="text nav-text" 
                    >{item.title}</span>
                    </Link>
                </li>
                );
          })}


                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    {/* cambiar a login */}
                    <Link to='/pacientes'>
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </Link>
                </li>

                {/* <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text">Dark mode</span>

                    <div className="toggle-switch">
                        <span className="switch"></span>
                    </div>
                </li> */}
                
            </div>
        </div>

    </nav>

    {/* <section className="home">
        <div className="text">Dashboard Sidebar</div>
    </section> */}

   

    {/* <script src="script.js"></script> */}
    </>
  );
};
