import React from 'react';

const Header = () => {
    return(
        <header className="header">
            <p className="user-name">Hola <span>Elisa María</span></p>

            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
        </header>
    );
}

export default Header;