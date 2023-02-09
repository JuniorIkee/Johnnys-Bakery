import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { AxiosService } from './axios.service';
import Ingrediente from "../models/ingrediente";

@Injectable({
  providedIn: "root",
})
export class IngredienteService {
  axiosServ: AxiosInstance;

  constructor(private axiosService: AxiosService) {
    this.axiosServ = this.axiosService.Criar();
  }

  Listar(filtro: string): Promise<AxiosResponse> {
    return this.axiosServ.get("ingrediente/listar/" + filtro);
  }

  Gravar(registro:Ingrediente): Promise<AxiosResponse> {
    return this.axiosServ.post("ingrediente/gravar", registro);
  }

  Carregar(idEnc:string): Promise<AxiosResponse<Ingrediente>> {
    return this.axiosServ.get("ingrediente/carregar/" + idEnc);
  }

  Excluir(idEnc:string): Promise<AxiosResponse> {
    return this.axiosServ.delete("ingrediente/excluir/" + idEnc);
  }
}
