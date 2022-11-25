import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Morador } from "src/app/model/morador";



@Injectable({
  providedIn: "root",
})
export class MoradorPromiseService {
  URL = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getByNome(nome: string): Promise<Morador[]> {
    // @ts-ignore
    return this.httpClient
    .get<Morador[]>(`${this.URL}/${nome}`)
    .toPromise();
  }

  save(morador: Morador): Promise<Morador> {
    // @ts-ignore
    return this.httpClient
    .post<Morador>(this.URL, JSON.stringify(morador), this.httpOptions)
    .toPromise();
  }

  path(morador: Morador): Promise<Morador> {
    // @ts-ignore
    return this.httpClient
    .patch<Morador>(
      `${this.URL}/${morador.id}`,
       JSON.stringify(morador),
       this.httpOptions
       )
    .toPromise();
  }

  update(morador: Morador): Promise<Morador> {
    // @ts-ignore
    return this.httpClient
    .put<Morador>(
      `${this.URL}/${morador.id}`,
       JSON.stringify(morador),
       this.httpOptions
       )
    .toPromise();
  }
}
