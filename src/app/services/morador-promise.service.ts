import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Morador } from "src/app/model/morador";



@Injectable({
  providedIn: "root",
})
export class MoradorPromiseService {
  moradores!: Morador[];
  URL = "http://localhost:3000/moradores";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}


  getMoradores(): Observable<Morador[]> {
    return this.httpClient.get<Morador[]>(this.URL);
  }


  getByName(nome: string): Observable<Morador[]> {
    return this.httpClient
    .get<Morador[]>(`${this.URL}?nome=${nome}`);
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

  delete(id: string): Promise<Morador> {
    // @ts-ignore
    return this.httpClient
    .delete<Morador>(`${this.URL}/${id}`)
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
