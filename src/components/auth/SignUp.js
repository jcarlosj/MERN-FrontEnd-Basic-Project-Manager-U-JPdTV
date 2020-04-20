import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

/** Contexts */
import AlertContext from '../../context/alerts/alert-context';
import AuthContext from '../../context/auth/auth-context';

const SignUp = () => {

    let history = useHistory();     // Hook de 'react-router-dom' para acceder a la instancia 'history' y puede usarse para navegar

    /** Get State Project Context */
    const 
        alertContext = useContext( AlertContext ),           // Hace accesible los datos del State del Contexto
        { alert, showAlert } = alertContext,                 // Destructuring Context Provider
        authContext = useContext( AuthContext ),             // Hace accesible los datos del State del Contexto
        { authenticated, message, signUp } = authContext;    // Destructuring Context Provider

    /** Tracking 'authenticated' 
     *  En caso que el usuario se haya autenticado o registrado
    */
   useEffect( () => {
        console .log( 'history', history );
        console .log( 'authenticated', authenticated );

        /** Validate if the user is authenticated  */
        if( authenticated ) {
            console .log( 'Autenticado!' );
            history .push( '/projects' );    // Forma de Redirigir usando 'react-router-dom'
        }
        /** Validate if a message exists */
        if( message ) {
            showAlert( message .text, message .class );
        }
   }, [ authenticated, message, history ]);

    /** Hook: Define State */
    const 
        [ signUpForm, setSignUpForm ] = useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }),
    /** Destructuring State 'signUpForm' */
        { name, email, password, confirmPassword } = signUpForm;

    /** Get form values when they change */
    const onChangeFormValues = event => {
        /** Update State 'logInForm' */
        setSignUpForm({
            ...signUpForm,
            [ event .target .name ]: event .target .value 
        });
    }

    /** Submit form data */
    const onSubmitFormValues = event => {
        event .preventDefault();

        /** Validate that the fields are empty */
        if( 
            name .trim() === '' 
            || email .trim() === ''
            || password .trim() === ''
            || confirmPassword .trim() === ''
        ) {
            showAlert( 'Todos los campos son obligatorios', 'alert-error' );  // Update State: Show Alert
            return;
        }

        /** The password field is less than 6 characters. */
        if( password .length < 6 ) {
            showAlert( 'La contraseña debe tener mínimo 6 caracteres', 'alert-error' );  // Update State: Show Alert
            return;
        }

        /** Validate that the passwords do not match */
        if( password !== confirmPassword ) {
            showAlert( 'La contraseña confirmada no coincide', 'alert-error' );  // Update State: Show Alert
            return;
        }

        /** Register User */
        signUp({
            name,
            email,
            password
        });
    }

    return(
        <div className="signup-form">
            <div className="form-container shadow-dark">
                <h1>Crear cuenta</h1>

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
                        <label htmlFor="user-name">Nombre</label>
                        <input 
                            id="user-name"
                            type="text"
                            name="name"
                            placeholder="Ej: Juan Carlos"
                            onChange={ onChangeFormValues }
                            value={ name }
                        />
                    </div>
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
                        <label htmlFor="confirm-password">Confirmar contraseña</label>
                        <input 
                            id="confirm-password"
                            type="password"
                            name="confirmPassword"
                            placeholder="Repite la contraseña del campo anterior"
                            onChange={ onChangeFormValues }
                            value={ confirmPassword }
                        />
                    </div>
                    <div className="form-field">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >Registrar</button>
                    </div>
                </form>

                <Link 
                    to="/" 
                    className="link">
                    Iniciar sesión
                </Link>
            </div>
        </div>
    );
}

export default SignUp;