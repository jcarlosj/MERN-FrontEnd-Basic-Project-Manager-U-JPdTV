import React from 'react';

export const Alert = ({ alert }) => {

    console.log( alert );

    if ( ! alert ) return null;
    
    return(
        <div
            data-cy="alert-error" 
            className={`message ${ alert.category }`}
        >
                { alert .message }
        </div>  
    )
    
}
