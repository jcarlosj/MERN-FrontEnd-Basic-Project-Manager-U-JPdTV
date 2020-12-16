/// <reference types="cypress" />
describe( '<Login />', () => {

    it( 'Verifica pantalla de inicio', () => {
        cy .visit( '/' );                            //  Visita la URL
        
        /** Formas no recomendadas */
        cy .contains( 'Iniciar Sesión' );            //  Contiene el texto
        cy .contains( 'h1', 'Iniciar Sesión' );      //  La etiqueta <h1> contiene el texto
        
        /** Forma recomendada */
        cy .get( '[data-cy="title"]' )
           .invoke( 'text' )
           .should( 'equal', 'Iniciar Sesión' );
    } );

});