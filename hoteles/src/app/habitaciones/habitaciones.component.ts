import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  //atributos
  //similar a 
  //let titulo="Juana"
  titulo:String="Juana"

  //arreglo de 10 objetos 
  habitaciones:any[]=[
    {nombre:"juna"},
    {}
  ]
  constructor() { }

  ngOnInit(): void { 
  }

}
