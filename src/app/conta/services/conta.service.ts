import { Usuario } from './../models/usuario';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Injectable()
export class ContaService extends BaseService {

  constructor(private http: HttpClient){ super() }

  cadastrarUsuário(usuario: Usuario) : Observable<Usuario>{
    let response = this.http
        .post(this.UrlServiceV1 + 'nova-conta', usuario)
        .pipe(
          map(this.ExtractData),
          catchError(this.serviceError)
        );

    return response;
  }

  login(usuario: Usuario){

  }
}
