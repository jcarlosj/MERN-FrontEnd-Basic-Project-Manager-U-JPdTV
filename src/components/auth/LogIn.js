import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

/** Contexts */
import AlertContext from '../../context/alerts/alert-context';
import AuthContext from '../../context/auth/auth-context';

const LogIn = () => {

    /** Get State Project Context */
    const 
        alertContext = useContext( AlertContext ),           // Hace accesible los datos del State del Contexto
        { alert, showAlert } = alertContext,                 // Destructuring Context Provider
        authContext = useContext( AuthContext ),             // Hace accesible los datos del State del Contexto
        { authenticated, message, logIn } = authContext;    // Destructuring Context Provider

    /** Hook: Define State */
    const 
        [ logInForm, setLogInForm ] = useState({
            email: '',
            password: ''
        }),
    /** Destructuring State 'logInForm' */
        { email, password } = logInForm;

    /** Get form values when they change */
    const onChangeFormValues = event => {
        /** Update State 'logInForm' */
        setLogInForm({
            ...logInForm,
            [ event .target .name ]: event .target .value 
        });
    }

    /** Submit form data */
    const onSubmitFormValues = event => {
        event .preventDefault();

        /** Validate that the fields are empty */
        if( email .trim() === '' || password .trim() === '' ) {
            showAlert( 'Todos los campos son obligatorios', 'alert-error' );  // Update State: Show Alert
            return;
        }

        /** LogIn User */
        logIn({
            email,
            password
        });
    }

    return(
        <div className="login-form">
            <div className="form-container shadow-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={ onSubmitFormValues }
                >
                    { alert 
                        ?   <div className={`message ${ alert.category }`}>
                                { alert .message }
                            </div>
                        : null
                    }
                    <div className="form-field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Ej: jcarlosj@correo.co"
                            onChange={ onChangeFormValues }
                            value={ email }
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Procura usar una clave segura"
                            onChange={ onChangeFormValues }
                            value={ password }
                        />
                    </div>
                    <div className="form-field">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >Iniciar Sesión</button>
                    </div>
                </form>

                <Link 
                    to="/sign-up" 
                    className="link">
                    Registro
                </Link>
            </div>
        </div>
    );
}

export default LogIn;