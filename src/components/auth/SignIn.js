import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

    return(
        <div className="login-form">
            <div className="form-container shadow-dark">
                <h1>Nueva cuenta</h1>

                <form>
                    <div className="form-field">
                        <label htmlFor="user-name">Nombre</label>
                        <input 
                            id="user-name"
                            type="text"
                            name="userName"
                            placeholder="Ej: Juan Carlos"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Ej: jcarlosj@correo.co"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Procura usar una clave segura"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="confirm-password">Confirmar contraseña</label>
                        <input 
                            id="confirm-password"
                            type="password"
                            name="confirmPassword"
                            placeholder="Repite la contraseña del campo anterior"
                        />
                    </div>
                    <div className="form-field">
                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                        >Registrar</button>
                    </div>
                </form>

                <Link 
                    to="/" 
                    className="link">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default SignIn;