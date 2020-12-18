/// <reference types="cypress" />

describe( '<Projects />', () => {

    it( 'Debe Loguearse/Autenticarse', () => {

        cy .visit( '/' );

        /** Autenticacion de un usuario que no existe */
        cy .get( '[data-cy="login-input-email"]' ) .type( 'eva.sofia@correo.co' );
        cy .get( '[data-cy="login-input-password"]' ) .type( '123456789' );

        cy .get( '[data-cy=login-button-submit]' ) .click();

        cy .get( '[data-cy="task-list-title"]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'Selecciona un proyecto' );

    } );

    describe( '<NewProject />', () => {
        
        it( 'Debe mostrar mensaje de error "Nombre del proyecto es obligatorio"', () => {
      
            cy .get( '[data-cy="new-project-button"]' ) .click();
            cy .get( '[data-cy="new-project-button-submit"]' ) .click();

            cy .get( '[data-cy="new-project-alert-error"]' )
                .should( 'exist' )
                .invoke( 'text' )
                .should( 'eq', 'Nombre del proyecto es obligatorio' );
            
            cy .get( '[data-cy="new-project-alert-error"]' )
                .should( 'have.class', 'message error' );

        } );

        it( 'Debe crear proyecto exitosamente', () => {
            
            cy .get( '[data-cy="new-project-input-name"]' ) .type( 'App Ecommerce' );
            
            cy .get( '[data-cy="new-project-button-submit"]' ) .click();

        } );

    } );

} );