import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

    heroes:string[] = ['Capitán América', 'Hulk', 'Thor', 'Spiderman', 'Ironman'];
    heroeBorrado:string = '';
    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
    }
  }
