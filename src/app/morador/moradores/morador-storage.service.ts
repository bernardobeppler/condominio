import { Morador } from './../../model/morador';
import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Constants } from 'src/app/util/constants';

@Injectable()
export class MoradorStorageService {
  moradores!: Morador[];
  private moradorSource!: BehaviorSubject<number>;
  constructor() {
    this.moradores = WebStorageUtil.get(Constants.MORADORES_KEY);
    // this.moradorSource = new BehaviorSubject<number>(this.moradores.length);
  }

  save(morador: Morador) {
    this.moradores = WebStorageUtil.get(Constants.MORADORES_KEY);
    this.moradores.push(morador);
    WebStorageUtil.set(Constants.MORADORES_KEY, this.moradores);
  }

  update(morador: Morador) {
    this.moradores = WebStorageUtil.get(Constants.MORADORES_KEY);
    this.delete(morador.nome!);
    this.save(morador);
  }

  delete(moradorname: string): boolean {
    this.moradores = WebStorageUtil.get(Constants.MORADORES_KEY);
    this.moradores = this.moradores.filter((m) => {
      return m.nome?.valueOf() != moradorname?.valueOf();
    });

    WebStorageUtil.set(Constants.MORADORES_KEY, this.moradores);
    return true;
  }

  isExist(value: string): boolean {
    this.moradores = WebStorageUtil.get(Constants.MORADORES_KEY);
    for (let m of this.moradores) {
      if (m.nome?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getMoradores(): Morador[] {
    this.moradores = WebStorageUtil.get(Constants.MORADORES_KEY);
    return this.moradores;
  }

  notifyTotalMoradores() {
    this.moradorSource.next(this.getMoradores()?.length);
    // if (this.getUsers()?.length > 1) {
    //   this.userSource.complete();
    // }
  }


  asObservable(): Observable<number> {
    return this.moradorSource;
    //return this.moradoresource.asObservable()
  }
}
