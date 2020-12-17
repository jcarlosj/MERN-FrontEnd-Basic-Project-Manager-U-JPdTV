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

    it( 'Debe mostrar el mensaje de error "La contraseña debe tener mínimo 6 caracteres"', () => {
        /** Ingresa datos al formulario */
        cy .get( '[data-cy="signup-input-name"]' )
            .type( 'Eva Sofía' );
        cy .get( '[data-cy="signup-input-email"]' )
            .type( 'eva.sofia@correo.co' );
        cy .get( '[data-cy="signup-input-password"]' )
            .type( '123' );
        cy .get( '[data-cy="signup-input-confirm-password"]' )
            .type( '123' );

        cy .get( '[data-cy=signup-button-submit]' )         //  Realiza click al botón
            .click();

        cy .get( '[data-cy=alert-error]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'La contraseña debe tener mínimo 6 caracteres' );

        cy .get( '[data-cy=alert-error]' )
            .should( 'have.class', 'alert-error' );

    } );

    it( 'Debe mostrar el mensaje de error "La contraseña confirmada no coincide"', () => {

        cy .get( '[data-cy="signup-input-password"]' )
            .clear()
            .type( '123456789' );
        cy .get( '[data-cy="signup-input-confirm-password"]' )
            .clear()
            .type( '123456788' );

        cy .get( '[data-cy=signup-button-submit]' )         //  Realiza click al botón
            .click()

        cy .get( '[data-cy=alert-error]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'La contraseña confirmada no coincide' );

        cy .get( '[data-cy=alert-error]' )
            .should( 'have.class', 'alert-error' );

    } );

    it( 'Debe crear nueva cuenta', () => {

        cy .get( '[data-cy="signup-input-confirm-password"]' )
            .clear()
            .type( '123456789' );

        cy .get( '[data-cy=signup-button-submit]' )         //  Realiza click al botón
            .click()

        cy .get( '[data-cy=alert-error]' )
            .should( 'not.exist' );

        cy .get( '[data-cy="task-list-title"]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'eq', 'Selecciona un proyecto' );

    } );

} );