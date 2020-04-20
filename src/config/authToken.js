import clientAxios from './axios';

/** Establece/Elimina Token de la configuración por defecto para las cabeceras en Axios */
const setAuthTokenToHeader = token => {
    if( token ) {
        clientAxios .defaults .headers .common[ 'x-auth-token' ] = token;   // Specify config defaults that will be applied to every request.
        return;
    }

    delete clientAxios .defaults .headers .common[ 'x-auth-token' ];    // Removes configuration defaults to be applied to each request.
}

export default setAuthTokenToHeader;