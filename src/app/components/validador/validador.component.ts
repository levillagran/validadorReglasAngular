import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validador',
  templateUrl: './validador.component.html',
  styleUrls: ['./validador.component.css']
})
export class ValidadorComponent implements OnInit {

  limites = {
      inferior: 2000,
      superior: 5000
    }
  
  categorias = [
    {
      id: 1,
      nombre: "ALTO"
    },
    {
      id: 2,
      nombre: "MEDIO"
    },
    {
      id: 3,
      nombre: "BAJO"
    }
  ]
  productos = [
    {
      id: 1,
      nombre: "YAMAHA",
      precio: 5000,
      categoriaId: 1
    },
    {
      id: 2,
      nombre: "SUZUKI",
      precio: 4000,
      categoriaId: 2
    },
    {
      id: 3,
      nombre: "BMW",
      precio: 1000,
      categoriaId: 3
    }
  ]
  producto = {
      id: 0,
      nombre: "",
      precio: 0,
      categoriaId: 0
    }

  constructor() { 
  }

  ngOnInit(): void {
  }

  establecerLimites(form: NgForm){
    this.limites.inferior = form.value.inferior
    this.limites.superior = form.value.superior
    this.categorias[0].nombre = form.value.nombre
    this.categorias[1].nombre = form.value.nombre1
    this.categorias[2].nombre = form.value.nombre2

    this.actualizarCategorias();
  }

  guardarProducto(formProducto: NgForm){
    formProducto.value.id = this.productos.length + 1
        
    if(formProducto.value.precio >= this.limites.superior){
      formProducto.value.categoriaId = 1
    }else if (formProducto.value.precio < this.limites.superior && formProducto.value.precio >= this.limites.inferior){
      formProducto.value.categoriaId = 2
    }else{
      formProducto.value.categoriaId = 3
    }

    this.productos.push(formProducto.value)

    this.limpiarFormulario(formProducto);
  }

  limpiarFormulario(form?: NgForm) {
      this.producto = {
        id: 0,
        nombre: "",
        precio: 0,
        categoriaId: 0
      }

  }

  actualizarCategorias(){
    this.productos.map(e => {
      if(e.precio >= this.limites.superior){
        e.categoriaId = 1
      }else if (e.precio < this.limites.superior && e.precio >= this.limites.inferior){
        e.categoriaId = 2
      }else{
        e.categoriaId = 3
      } 
    })
  }

}
