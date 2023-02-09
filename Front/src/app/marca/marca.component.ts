import { Component } from '@angular/core';
import Marca from '../models/marca';
import { MarcaService } from '../services/marca.service';

declare var bootstrap:any;

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent {

  constructor(private service: MarcaService){
  }

  marca: Marca = new Marca();
  listaMarcas: Marca[];
  filtroNome:string = "";
  modal:any;
  
  ngOnInit(): void{
    this.modal = new bootstrap.Modal(document.getElementById('marca'));

    this.Listar();
  }

  Listar(){
    this.service.Listar(this.filtroNome).then((response:any) =>{
      this.listaMarcas = response.data;
    }).catch(error => {
      console.log(error);
    })
  }

  Carregar(idEnc: string){
    this.service.Carregar(idEnc).then(response =>  {
      this.marca = response.data;

      this.modal.show();
    }).catch(error => {
      console.log(error);
    })
  }

  Salvar(){
    this.service.Gravar(this.marca).then(response => {
      this.marca.IdEnc = response.data;
      
      this.Listar();
    }
    ).catch( error => {
      console.log(error);
    });
  }

  Excluir(){
    this.service.Excluir(this.marca.IdEnc).then(response =>  {
    }).catch(error => {
      console.log(error);
    })
  }

  Novo(){
    this.marca = new Marca();
    this.modal.show();
  }
}

