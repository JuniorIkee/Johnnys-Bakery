import { Component } from '@angular/core';
import Fornecedor from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

declare var bootstrap : any;

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent {
  
  constructor(private service: FornecedorService){
  }

  fornecedor: Fornecedor = new Fornecedor();
  listaFornecedores: Fornecedor[];
  filtroNome:string = "";
  modal:any;
  
  ngOnInit(): void{
    this.modal = new bootstrap.Modal(document.getElementById('fornecedor'));

    this.Listar();
  }

  Listar(){
    this.service.Listar(this.filtroNome).then((response:any) =>{
      this.listaFornecedores = response.data;
    }).catch(error => {
      console.log(error);
    })
  }

  Carregar(idEnc: string){
    this.service.Carregar(idEnc).then(response =>  {
      this.fornecedor = response.data;

      this.modal.show();
    }).catch(error => {
      console.log(error);
    })
  }

  Salvar(){
    this.service.Gravar(this.fornecedor).then(response => {
      this.fornecedor.IdEnc = response.data;
      
      this.Listar();
    }
    ).catch( error => {
      console.log(error);
    });
  }

  Excluir(){
    this.service.Excluir(this.fornecedor.IdEnc).then(response =>  {
    }).catch(error => {
      console.log(error);
    })
  }

  Novo(){
    this.fornecedor = new Fornecedor();
    this.modal.show();
  }
}
