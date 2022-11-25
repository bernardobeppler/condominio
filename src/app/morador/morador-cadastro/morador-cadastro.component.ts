import { MoradorService } from './../../services/morador.service';
import { Constants } from './../../util/constants';
import { WebStorageUtil } from './../../util/web-storage-util';
import { Morador } from './../../model/morador';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-morador-cadastro',
  templateUrl: './morador-cadastro.component.html',
  styleUrls: ['./morador-cadastro.component.css'],
  providers: [MoradorService]
})
export class MoradorCadastroComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  morador!: Morador;
  moradores?: Morador[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private moradorService: MoradorService) { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    const morador = WebStorageUtil.get(Constants.MORADORES_KEY) as Morador;
    //this.morador = new Morador(morador.nome, morador.situacao ,morador.apartamento, morador.bloco);
  }

  onSubmit() {
    this.moradorService
      .save(this.morador)
      .then(() => {
        this.isSuccess = true;
        this.message = 'Morador cadastrado com sucesso!';
        this.isSubmitted = true;
        this.isShowMessage = true;
      })
      .catch((e) => {
        this.isSuccess = false;
        this.message = e
      })
      .finally(() => {
        console.log('Processo com Promise Finalizado');
      });
  }
}
