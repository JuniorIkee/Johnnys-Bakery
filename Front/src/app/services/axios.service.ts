import { Injectable } from '@angular/core';
import axios from "axios";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  constructor(private router: Router) {
  }

  public Criar() {

    const instance = axios.create({
      baseURL: environment.urlApi
    });

    return instance;
  }
}
