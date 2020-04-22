import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

/** Context */
import AuthContext from '../../context/auth/auth-context';

/** Higher Order Component */
const PrivateRoute = ({ component: Component, ...props }) => {     // Un Componente de Orden Superior recibirá como parámetros un Componente y sus props

    /** Get State Alert Context */
    const 
        authContext = useContext( AuthContext ),    // Hace accesible los datos del State del Contexto
        { authenticated } = authContext;            // Destructuring Context Provider

    return(
        <Route 
            { ...props }                            // Pasa una copia de los props del Componente a la Ruta
            render={ props => ! authenticated       // Creamos una renderización condicionada a la autenticación del usuario
                ?   <Redirect to="/" />             // Redirecciona si el usuario no esta autenticado
                :   <Component                      // Renderiza el componente si el usuario está autenticado 
                        { ...props }                // Pasa una copia de los props del Componente a el Componente
                    />  
            } 
        />
    );
}

export default PrivateRoute;