import { Morador } from './../../model/morador';
import { MoradorStorageService } from './../moradores/morador-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-morador-cadastro',
  templateUrl: './morador-cadastro.component.html',
  styleUrls: ['./morador-cadastro.component.css']
})
export class MoradorCadastroComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  morador!: Morador;
  moradores?: Morador[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private moradorService: MoradorStorageService) { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.morador = new Morador('', '', '', '');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.moradorService.isExist(this.morador.nome!)) {
      this.moradorService.save(this.morador);
    } else {
      this.moradorService.update(this.morador);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Morador cadastrado com sucesso!';

    this.morador = new Morador('', '', '', '');

    this.moradores = this.moradorService.getMoradores();

  }
}
