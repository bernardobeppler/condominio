import { MoradorService } from './morador.service';
import { HttpClient } from '@angular/common/http';
import { MoradorPromiseService } from './../../services/morador-promise.service';
import { Constants } from './../../util/constants';
import { WebStorageUtil } from './../../util/web-storage-util';
import { MoradorStorageService } from 'src/app/services/morador-storage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Morador } from 'src/app/model/morador';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent implements OnInit {
  @ViewChild('stateSelect') stateSelect!: ElementRef;
  value: number = 0;
  morador!: Morador;
  moradores?: Morador[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private MoradorStorageService: MoradorStorageService,
    private MoradorPromiseService: MoradorPromiseService,
    private MoradorService: MoradorService,
    ) { }

  ngOnInit(): void {
    this.message = '';
      this.MoradorService
      .getMoradores().forEach((morador) => {
        this.moradores = morador;
      });
  }

    /**
     * @param morador
   */




  onEdit(morador: Morador) {
    location.pathname = '/cadastrar';
    // location.pathname = '/moradores';
  }

  onDelete(id: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o morador?'
    );
    if (!confirmation) {
      return;
    }
    this.MoradorPromiseService.delete(id);
    location.reload();
  }

}
