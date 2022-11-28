import { Usuario } from './../models/usuario';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContaService {

  constructor(private http: HttpClient){}

  cadastrarUsuário(usuario: Usuario){

  }

  login(usuario: Usuario){

  }
}
