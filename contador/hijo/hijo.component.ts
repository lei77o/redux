import { Component,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador:number;

  constructor( private store : Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  multiplicar(){

    const accion = new MultiplicarAction(5);
    this.store.dispatch( accion );

    //this.contador *=2;
    //this.cambioContador.emit(this.contador);

  }

  dividir(){

    const action = new DividirAction(5);
    this.store.dispatch( action );
    //this.contador /=2;
    //this.cambioContador.emit(this.contador);

  }

  resetNieto( nuevoContador ){

    this.contador = nuevoContador;
    //this.cambioContador.emit(this.contador);
    
  }

}
