import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

/** Contexts */
import AlertContext from '../../context/alerts/alert-context';

const SignIn = () => {

    /** Get State Project Context */
    const 
        alertContext = useContext( AlertContext ),           // Hace accesible los datos del State del Contexto
        { alert, showAlert } = alertContext;                 // Destructuring Context Provider

    /** Hook: Define State */
    const 
        [ signInForm, setSignInForm ] = useState({
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }),
    /** Destructuring State 'signInForm' */
        { userName, email, password, confirmPassword } = signInForm;

    /** Get form values when they change */
    const onChangeFormValues = event => {
        /** Update State 'logInForm' */
        setSignInForm({
            ...signInForm,
            [ event .target .name ]: event .target .value 
        });
    }

    /** Submit form data */
    const onSubmitFormValues = event => {
        event .preventDefault();

        /** Validate form values */
        if( 
            userName .trim() === '' 
            || email .trim() === ''
            || password .trim() === ''
            || confirmPassword .trim() === ''
        ) {
            showAlert( 'Todos los campos son obligatorios', 'alert-error' );  // Update State: Show Alert
            return;
        }
        
    }

    return(
        <div className="signin-form">
            <div className="form-container shadow-dark">
                <h1>Nueva cuenta</h1>

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
                            name="userName"
                            placeholder="Ej: Juan Carlos"
                            onChange={ onChangeFormValues }
                            value={ userName }
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

export default SignIn;