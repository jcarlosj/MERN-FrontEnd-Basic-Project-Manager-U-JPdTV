/// <reference types="cypress" />

describe( '<LogIn />', () => {

    it( 'Debe mostrar mensaje de error al hacer click con formulario vacio', () => {
    
        cy .visit( '/' );

        cy .get( '[data-cy=login-button-submit]' ) .click();

        cy .get( '[data-cy=alert-error]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'Todos los campos son obligatorios' );

        cy .get( '[data-cy=alert-error]' )
            .should( 'have.class', 'alert-error' );
    
    } );

} );