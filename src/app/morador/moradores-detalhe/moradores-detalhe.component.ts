import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moradores-detalhe',
  templateUrl: './moradores-detalhe.component.html',
  styleUrls: ['./moradores-detalhe.component.css']
})
export class MoradoresDetalheComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
