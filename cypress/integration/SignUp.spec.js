/// <reference types="cypress" />

describe( '<SignUp />', () => {

    it( 'Debe mostrar mensaje de error al hacer click con formulario vacio', () => {

        cy .visit( '/sign-up' );                            //  Visita la URL

        cy .get( '[data-cy=signup-button-submit]' )         //  Realiza click al botón
            .click();

        cy .get( '[data-cy=alert-error]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'Todos los campos son obligatorios' );

        cy .get( '[data-cy=alert-error]' )
            .should( 'have.class', 'alert-error' );

    } );

} );