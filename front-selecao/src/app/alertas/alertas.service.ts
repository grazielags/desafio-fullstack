import {Injectable} from '@angular/core'
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Alerta} from "./alerta/alerta.model"

import {SELECAO_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

const httpOptions = {
  headers: new Headers({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class AlertasService {

    constructor(private http: Http){}

    alertas(): Observable<Alerta[]> {
      return this.http.get(`${SELECAO_API}/lista`, {headers: httpOptions.headers})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}
