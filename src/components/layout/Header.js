import React, { useContext, useEffect, useDebugValue } from 'react';

/** Context */
import AuthContext from '../../context/auth/auth-context';

const Header = () => {

    /** Get State Alert Context */
    const 
        authContext = useContext( AuthContext ),           // Hace accesible los datos del State del Contexto
        { user, getAuthenticatedUser } = authContext;      // Destructuring Context Provider

    /** Tracking 'authenticated' 
         *  En caso que el usuario se haya autenticado o registrado
        */
    useEffect( () => {
        getAuthenticatedUser();
    }, []);

    return(
        <header className="header">
            { user
                ?   <p className="user-name">Hola <span>{ user .name }</span></p>
                :   null
            }
            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
        </header>
    );
}

export default Header;