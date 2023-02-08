import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDiologComponent } from './components/form-diolog/form-diolog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MtoliaApp';

  logo: string = './moneytolialogo.jpg';

  ngOnInit(): void {
    // if (localStorage.getItem('authentication') === null) {
    //   //window.location.href = '/giris';
    //   this.route
    // }
  }
}
