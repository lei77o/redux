import { Action } from '@ngrx/store';

import * as fromContador from './contador.actions';

//import {INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, RESET, actions } from './contador.actions';

export function contadorReducer( state: number = 10, action: fromContador.actions){

switch ( action.type ) {
        case fromContador.INCREMENTAR:
        
            return state + 1;

        case fromContador.DECREMENTAR:
            
            return state - 1;

        case fromContador.MULTIPLICAR:
        
            return state * action.payload;
    
        case fromContador.DIVIDIR:
    
            return state / action.payload;
            
        case fromContador.RESET:

            return state = 0;

        default:
            return state;
    }

}