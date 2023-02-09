import { Component } from '@angular/core';
import Ingrediente from '../models/ingrediente';
import { IngredienteService } from '../services/ingrediente.service';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent {

  constructor(private service: IngredienteService){
  }

  ingrediente: Ingrediente = new Ingrediente();
  listaIngredientes: Ingrediente[];
  filtroNome:string = "";
  
  ngOnInit(): void{
    this.Listar();
  }

  Listar(){
    this.service.Listar(this.filtroNome).then((response:any) =>{
      this.listaIngredientes = response.data;
    }).catch(error => {
      console.log(error);
    })
  }

  Carregar(idEnc: string){
    this.service.Carregar(idEnc).then(response =>  {
      this.ingrediente = response.data;
    }).catch(error => {
      console.log(error);
    })
  }

  Salvar(){
    this.service.Gravar(this.ingrediente).then(response => {
      this.ingrediente.IdEnc = response.data;
      console.log(this.ingrediente);
      
      this.Listar();
    }
    ).catch( error => {
      console.log(error);
    });
  }

  Excluir(){
    this.service.Excluir(this.ingrediente.IdEnc).then(response =>  {

    }).catch(error => {
      console.log(error);
    })
  }

  Novo(){
    this.ingrediente = new Ingrediente();
  }

  Marcas(){

  }

  Fornecedores(){
    
  }
}
