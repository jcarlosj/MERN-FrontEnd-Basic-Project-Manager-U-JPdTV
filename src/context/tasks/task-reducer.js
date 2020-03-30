/** Define las acciones o eventos del Componente 
 *      - state: Estado del Componente antes de algún cambio.
 *      - action: Un Objeto JavaScrit con uno o dos parámetros
 *          + type: Nombre del Evento que cambiará nuestro estado
 *          + payload: Envia información extra a la actualización del estado (Opcional)
*/
const TaskReducer = ( state, action ) => {   
    switch( action .type ) {
        default:            // Acción por defecto
            return state;
    }
}

export default TaskReducer;