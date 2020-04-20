import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {

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

    return(
        <div className="login-form">
            <div className="form-container shadow-dark">
                <h1>Iniciar Sesión</h1>

                <form>
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
                            type="button"
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