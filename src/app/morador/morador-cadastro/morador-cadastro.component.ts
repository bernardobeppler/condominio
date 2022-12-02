import { MoradorService } from '../moradores/morador.service';
import { MoradorPromiseService } from './../../services/morador-promise.service';
import { Morador } from './../../model/morador';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(
    private MoradorPromiseService: MoradorPromiseService,
    private MoradorService: MoradorService
    )
     { }

  ngOnInit(): void {
    this.message = '';
    this.morador = new Morador('', '', '', '');
  }

  onSubmit() {
    this.MoradorService.salvarOuAtualizar(this.morador).subscribe(
      (data) => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Morador cadastrado com sucesso!';
        this.morador = new Morador('', '', '', '');
      },
      (error) => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = 'Erro ao cadastrar morador!';
      }
    )
  }
}
