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

    it( 'Debe mostrar el mensaje de error "Verifique que los datos ingresados son correctos"', () => {
        
        /** Autenticacion de un usuario que no existe */
        cy .get( '[data-cy="login-input-email"]' ) .type( 'ana.maria@correo.co' );
        cy .get( '[data-cy="login-input-password"]' ) .type( '98765432' );

        cy .get( '[data-cy=login-button-submit]' ) .click();

        cy .get( '[data-cy=alert-error]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'Verifique que los datos ingresados son correctos' );

        cy .get( '[data-cy=alert-error]' )
            .should( 'have.class', 'alert-error' );

        /** Autenticacion de un usuario que existe, pero su contrasena esta errada */
        cy .get( '[data-cy="login-input-email"]' ) .clear() .type( 'eva.sofia@correo.co' );

        cy .get( '[data-cy=login-button-submit]' ) .click();

        cy .get( '[data-cy=alert-error]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'Verifique que los datos ingresados son correctos' );

        cy .get( '[data-cy=alert-error]' )
            .should( 'have.class', 'alert-error' );

    } );

    it( 'Debe iniciar sesión & cerrar sesión', () => {

        /** Autenticacion de un usuario que existe */
        cy .get( '[data-cy="login-input-password"]' ) .clear() .type( '123456789' );

        cy .get( '[data-cy=login-button-submit]' ) .click();

        cy .get( '[data-cy=alert-error]' )
            .should( 'not.exist' );

        cy .get( '[data-cy="task-list-title"]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'Selecciona un proyecto' );

        cy .get( '[data-cy="header-button-signoff"]' ) .click();

    } );

} );