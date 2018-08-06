import { MyCurrencyPipe } from '../my-currency.pipe';
import { Component, Output, OnInit, EventEmitter, ViewChild,
  trigger,
  state,
  style,
  animate,
  transition  } from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {Alerta} from './alerta/alerta.model';
import {AlertasService} from './alertas.service';
import { ModalDirective } from 'ng2-bootstrap';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Component({
  selector: 'sel-alertas',
  styles: [
    `.ng-valid[required] {
        border-left: 5px solid #5cb85c; /* green */
    }`,
    `.ng-invalid:not(.ng-untouched):not(form) {
        border-left: 5px solid #d9534f; /* red */
    }`,
    `.red-text {
        color: #d9534f !important; /* red */
    }`
  ],
  providers: [AlertasService, FormBuilder, MyCurrencyPipe],
  templateUrl: './alertas.component.html',
  animations: [
    trigger('flyInOut', [
        state('in', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('void => *', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.5s ease-in')
        ]),
        transition('* => void', [
            animate('0.2s 10 ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
        ])
    ])
  ]
})
export class AlertasComponent implements OnInit {
  alerta: Alerta;
  @Output() removeAlerta = new EventEmitter();
  alertas: Alerta[]
  alertasPagina: Alerta[]
  page: number;
  qtdForPage: number;
  qtdAlertas: number;
  searchText: string = "";

  constructor(private alertasService: AlertasService) {}

  ngOnInit() {
    this.qtdForPage = 10;
    this.page = 0;
    this.listAlerta();
  }

  listAlerta() {
    this.alertasPagina = [];
    this.alertasService.alertas()
      .subscribe(
        alertas => {
          this.alertas = alertas
          this.qtdAlertas = 0;
          if(this.alertas != null) {
            this.qtdAlertas = this.alertas.length;
          }
          this.fillAlertas();
        });
  }

  paginar($event: any) {
    this.page = $event - 1;
    this.fillAlertas();
  }

  fillAlertas() {
    for(let i = (this.page * this.qtdForPage); i< (this.page * this.qtdForPage + this.qtdForPage); i++) {
      if(i >= this.qtdAlertas) {
        break;
      }
      if(this.qtdAlertas > 0) {
        this.alertasPagina.push(this.alertas[i]);
      }
    }
  }

}