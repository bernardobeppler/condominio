import { MoradorStorageService } from 'src/app/morador/moradores/morador-storage.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private moradorService: MoradorStorageService) {
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.morador = new Morador('', '', '', '');
    this.moradores = this.moradorService.getMoradores();
  }

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
