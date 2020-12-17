import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

/** Contexts */
import AlertContext from '../../context/alerts/alert-context';
import AuthContext from '../../context/auth/auth-context';

const LogIn = ( props ) => {

    /** Get State Project Context */
    const 
        alertContext = useContext( AlertContext ),           // Hace accesible los datos del State del Contexto
        { alert, showAlert } = alertContext,                 // Destructuring Context Provider
        authContext = useContext( AuthContext ),             // Hace accesible los datos del State del Contexto
        { authenticated, message, logIn } = authContext;    // Destructuring Context Provider

    /** Tracking 'authenticated' 
     *  En caso que el nombre de usuario o password no existan
    */
    useEffect( () => {
        console .log( 'props.history', props.history );
        console .log( 'authenticated', authenticated );

        /** Validate if the user is authenticated  */
        if( authenticated ) {
            console .log( 'Autenticado!' );
            props .history .push( '/projects' );    // Forma de Redirigir usando 'react-router-dom'
        }
        /** Validate if a message exists */
        if( message ) {
            showAlert( message .text, message .class );
        }
    }, [ authenticated, message, props .history ]);

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
                <h1 data-cy="login-title">Iniciar Sesión</h1>

                <form
                    onSubmit={ onSubmitFormValues }
                    data-cy="login-form"
                >
                    { alert 
                        ?   <div
                                data-cy="alert-error" 
                                className={`message ${ alert.category }`}>
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
                            data-cy="login-input-email"
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
                            data-cy="login-input-password"
                        />
                    </div>
                    <div className="form-field">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            data-cy="login-button-submit"
                        >Iniciar Sesión</button>
                    </div>
                </form>

                <Link 
                    data-cy="login-link-register"
                    to="/sign-up" 
                    className="link link-register">
                    Registro
                </Link>
            </div>
        </div>
    );
}

export default LogIn;