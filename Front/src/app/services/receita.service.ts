// import { Injectable } from "@angular/core";
// import { environment } from "src/environments/environment";
// import axios, { AxiosInstance, AxiosResponse } from "axios";
// import { AxiosService } from './axios.service';
// import Receita from "../models/receita";

// @Injectable({
//   providedIn: "root",
// })
// export class ReceitaService {
//   axiosServ: AxiosInstance;

//   constructor(private axiosService: AxiosService) {
//     this.axiosServ = this.axiosService.Criar();
//   }

//   Listar(): Promise<AxiosResponse> {
//     return this.axiosServ.get("data-disponivel/listar");
//   }

//   Gravar(registro:Receita): Promise<AxiosResponse> {
//     return this.axiosServ.post("data-disponivel/gravar", registro);
//   }

//   Carregar(idEnc:string): Promise<AxiosResponse<Receita>> {
//     return this.axiosServ.get("data-disponivel/carregar/" + idEnc);
//   }

//   Excluir(idEnc:string): Promise<AxiosResponse> {
//     return this.axiosServ.delete("data-disponivel/excluir/" + idEnc);
//   }
// }
