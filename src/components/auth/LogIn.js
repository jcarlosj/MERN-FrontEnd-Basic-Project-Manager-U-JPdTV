import React from 'react';

const LogIn = () => {
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
                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                        >Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;