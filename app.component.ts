import { state } from '@angular/animations';
import { Component } from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';

import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  title = 'redux';

  constructor( private store: Store<AppState>) {

    this.store.select('contador').subscribe( state => {

     contador  => this.contador = contador;

    });

  }

  incrementar(){
      //this.contador+=1;
      const action = new IncrementarAction();

      this.store.dispatch( action );

  }

  decrementar(){
      
      const action = new DecrementarAction();

      this.store.dispatch( action );
  }

}

