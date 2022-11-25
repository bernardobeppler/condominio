import { MoradorPromiseService } from './../../services/morador-promise.service';
import { Constants } from './../../util/constants';
import { WebStorageUtil } from './../../util/web-storage-util';
import { MoradorStorageService } from 'src/app/services/morador-storage.service';
import { Component, OnInit } from '@angular/core';
import { Morador } from 'src/app/model/morador';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent implements OnInit {
  value: number = 0;
  morador!: Morador;
  moradores?: Morador[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private moradorService: MoradorStorageService,
    private MoradorPromiseService: MoradorPromiseService
    ) { }

  ngOnInit(): void {
    this.message = '';
    Shared.initializeWebStorage();
    this.morador = WebStorageUtil.get(Constants.MORADORES_KEY);
    this.MoradorPromiseService
      .getByNome(Constants.MORADORES_KEY)
      .then((m: Morador[]) => {
        this.morador = m[0];
        localStorage.setItem(
          Constants.MORADORES_KEY,
           JSON.stringify(Morador.toWS(this.morador))
           );
      })
      .catch(() => {
        this.morador = WebStorageUtil.get(Constants.MORADORES_KEY);
      }
      );
  }

    /**
     * @param morador
   */

  onEdit(morador: Morador) {
    let clone = Morador.clone(morador);
    this.morador = clone;
  }

  onDelete(nome: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o morador: ' + nome
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.moradorService.delete(nome);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O morador foi removido com sucesso!';
    } else {
      this.message = 'Opps! O morador não pode ser removido!';
    }
    this.moradores = this.moradorService.getMoradores();
  }

}
