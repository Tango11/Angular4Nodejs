import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.service';
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations:[
  	trigger('contenedorAnimable',[
  		state('inicial', style({
  			opacity: 0,
  			backgroundColor: 'green',
  			transform:'rotate3d(0,0,0,0deg)'
  		})),
  		state('final', style({
  			opacity: 1,
  			backgroundColor: 'yellow',
  			transform:'rotate3d(5,10,20,30deg)'
  		})),
  		transition('inicial => final', animate(1000)),
  		transition('final => inicial', animate(500)),

  	])
  ]

})
export class LugaresComponent {
  title = 'SmpMall-Sergio Miranda Puebla';
  state='inicial';
  lat:number=-33.4627261;
  lng:number=-70.6621374;
  lugares = null;
  animar(){
  alert('lindo');
  	this.state = (this.state == 'final') ? 'inicial' : 'final';
  }
  animacionInicia(e)
  {
  	console.log("iniciado");
  	console.log(e);
  }
  animacionTermina(e)
  {
  	console.log("Terminado");
  	console.log(e);
  }
  constructor (private lugaresService: LugaresService){
   lugaresService.getLugares()
       .subscribe((lugares) => {
      this.lugares = lugares;
      var me = this;
      me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });      
    }, error => {
      alert(error.statusText);
    });

     //    .valueChanges().subscribe(lugares => {
      //  console.log(lugares)
      //  this.lugares = lugares;
   
  }
 
 
}