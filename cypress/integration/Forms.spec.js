/// <reference types="cypress" />
describe( '<Login />', () => {

    it( 'Verifica pantalla de inicio', () => {
        cy .visit( '/' );                            //  Visita la URL
        
        /** Formas no recomendadas */
        cy .contains( 'Iniciar Sesión' );            //  Contiene el texto
        cy .contains( 'h1', 'Iniciar Sesión' );      //  La etiqueta <h1> contiene el texto
        
        /** Forma recomendada */
        cy .get( '[data-cy="login-title"]' )
           .invoke( 'text' )
           .should( 'equal', 'Iniciar Sesión' );
    } );

    it( 'Verifica formulario', () => {
        cy .get( '[data-cy="login-form"]' )
            .should( 'exist');                          //  Verifica que exista el formulario

        /** Campos del formulario */
        cy .get( '[data-cy="login-input-email"]' )   
            .should( 'exist' );                         //  Verifica que exista el input de email
        cy .get( '[data-cy="login-input-password"]' )
            .should( 'exist' );                         //  Verifica que exista el input de password
        
            /** Boton */
        cy .get( '[data-cy="login-button-submit"]' )
            .should( 'exist' )
            .contains( 'Iniciar Sesión' );              //  Verifica que el botón existe

    });

    it( 'Verifica enlace registro', () => {
        /** Enlace Registro  */
        cy .get( '[data-cy="login-link-register"]' )
            .should( 'exist' )                          //  Verifica si existe el elemento
            .should( 'have.prop', 'tagName' )           
            .should( 'eq', 'A' );                       //  Verifica que el elemento sea un enlace  

        cy .get( '[data-cy="login-link-register"]' )
            .should( 'have.class', 'link' )             //  Verifica clases del elemento
            .and( 'have.class', 'link-register' )
            .contains( 'Registro' );

        cy .get( '[data-cy="login-link-register"]' )
            .should( 'have.attr', 'href' )
            .should( 'eq', '/sign-up' );
    });

});

describe( '<SignUp />', () => {

    it( 'Verifica titulo', () => {

        cy.visit( '/sign-up' );

        cy .get( '[data-cy="signup-title"]' )
            .should( 'exist' )
            .invoke( 'text' )
            .should( 'not.eq', 'Iniciar Sesión' )
            .should( 'eq', 'Crear cuenta' );

    });

});