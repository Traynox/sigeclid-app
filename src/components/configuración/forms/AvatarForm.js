import React from 'react'

export const AvatarForm = () => {
    return (
        <article className="card__profile">
            <header className="card__header">
                <img src='dist/img/photo1.png' alt="pattern card" className="card__header-image" />
                <img src='dist/img/user2-160x160.jpg' alt="profile image" className="card__header-profile" />
            </header>
            <section className="card__body">
                <h5 className="card__text card__text--light">
                   CLINICA DENTAL
                    {/* <span className="card__text card__text--light">26</span> */}
                </h5>
                <p className="card__text card__text--light">SIQUIRRES</p>
            </section>
            <footer className="card__footer">
                <div className="card__stats">
                    <button className=" btn btn-primary btn-md mt-2">Actualizar foto</button>
                    <p className="card__text card__text--light--subtitulo">Solo se permite JPG, GIF o PNG. Maximo tamaño 800K</p>
                </div>
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