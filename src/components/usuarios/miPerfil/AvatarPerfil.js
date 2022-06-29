import React from 'react'

export const AvatarPerfil = () => {
    return (
        <article className="card__profile">
            <header className="card__header">
                <img src='dist/img/photo1.png' alt="pattern card" className="card__header-image" />
                <img src='dist/img/user2-160x160.jpg' alt="profile image" className="card__header-profile" />
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
                    <button className=" btn btn-primary btn-md mt-2">Actualizar foto</button>
                    <p className="card__text card__text--light--subtitulo">Solo se permite JPG, GIF o PNG. Maximo tamaño 800K</p>
                </div>
            </footer>
        </article>
    )
}
