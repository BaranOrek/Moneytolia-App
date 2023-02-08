import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/Offer';
import { MatDialog } from '@angular/material/dialog';
import { FormDiologComponent } from 'src/app/components/form-diolog/form-diolog.component';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {

  offers?: Offer[]
  interval?: any

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (localStorage.getItem('offers') != null) {
        this.offers = JSON.parse(localStorage['offers']);
        this.offers?.forEach((value, index) => {
          value.id = index;
        })
      }

    }, 500);
    if (localStorage.getItem('authentication') === null) {
      window.location.href = '/giris';
    }
  }
  constructor(public dialog: MatDialog) { }

  onClickInc(index: number) {
    this.offers?.forEach((value, i) => {
      if (i == index) {
        value.offerCount++
        localStorage.setItem('offers', JSON.stringify(this.offers))
      }
    })
  }
  onClickDec(index: number) {
    this.offers?.forEach((value, i) => {
      if (i == index) {
        if (value.offerCount != 0) {
          value.offerCount--
          localStorage.setItem('offers', JSON.stringify(this.offers))
        }
      }
    })
  }
  onClickDelete(index: number) {
    this.offers?.splice(index, 1)
    localStorage.setItem('offers', JSON.stringify(this.offers))
  }
  openDiolog(index: number) {
    this.dialog.open(FormDiologComponent, { data: index });
  }
  onClickExit() {
    localStorage.clear();
    window.location.href = '/giris';
  }

}
