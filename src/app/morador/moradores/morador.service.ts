import { Constants } from 'src/app/util/constants';
import { Injectable } from "@angular/core";
import { Morador } from 'src/app/model/morador';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: "root",
})
export class MoradorService {
  moradores!: Morador[];
  URL = "http://localhost:3000/moradores";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  save(morador: Morador): Promise<Morador> {
    const p = new Promise<Morador>((resolve, reject) => {
      reject('Erro ao cadastrar morador');
      const moradores = WebStorageUtil.get(Constants.MORADORES_KEY);
      moradores.push(morador);
      WebStorageUtil.set(Constants.MORADORES_KEY, moradores);
      resolve(morador);
    })
    return p;
  }


  getMoradores(): Observable<Morador[]> {
    return this.httpClient.get<Morador[]>(this.URL);
  }

  getByName(nome: string): Observable<Morador[]> {
    return this.httpClient
      .get<Morador[]>(`${this.URL}?nome=${nome}`);
  }

  getById(morador: Morador): Observable<Morador> {
    return this.httpClient
      .get<Morador>(`${this.URL}/${morador.id}`);
  }

  isExist(morador: Morador): Observable<boolean> {
    return this.httpClient
      .get<boolean>(`${this.URL}/?nome=${morador.nome}`);
  }



  salvarOuAtualizar(morador: Morador): Observable<Morador> {
    if (morador.id) {
      return this.salvar(morador);
    } else {
      return this.atualizar(morador);
    }
  }


  salvar(morador: Morador): Observable<Morador> {
    return this.httpClient
      .post<Morador>(this.URL, morador, this.httpOptions);
  }

  atualizar(morador: Morador): Observable<Morador> {
    return this.httpClient
      .put<Morador>(`${this.URL}/${morador.id}`, this.httpOptions);
  }



}
