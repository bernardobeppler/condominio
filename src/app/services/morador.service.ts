import { Constants } from 'src/app/util/constants';
import { Injectable } from "@angular/core";
import { Morador } from 'src/app/model/morador';
import { WebStorageUtil } from 'src/app/util/web-storage-util';



@Injectable()
export class MoradorService {

  constructor() { }

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





}
