import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss'],
})
export class PaginaComponent implements OnInit {
  public apiGreeting = '';
  public apiDatetime = '';
  public text = '';
  public textResult = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getHello()
      .pipe(
        catchError((err) => {
          this.apiGreeting = 'Falha na comunicação com o servidor.';
          return [];
        })
      )
      .subscribe((response) => {
        if (response) {
          console.log(' response.mensagem', response.mensagem);
          this.apiGreeting = response.mensagem;
        }
      });

    this.apiService
      .getDatetime()
      .pipe(
        catchError((err) => {
          this.apiGreeting = 'Falha na comunicação com o servidor.';
          return [];
        })
      )
      .subscribe((response) => {
        if (response) {
          console.log('getDatetime', response.mensagem);
          this.apiDatetime = response.mensagem;
        }
      });
  }

  sendText() {
    this.apiService
      .sendText(this.text)
      .pipe(
        catchError((err) => {
          this.apiGreeting = 'Falha na comunicação com o servidor.';
          return [];
        })
      )
      .subscribe((response) => {
        if (response) {
          console.log('texto vindo do laravel', response);
          this.textResult = response;
        }
      });
  }
}
