import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-create-page',
  templateUrl: './offer-create-page.component.html',
  styleUrls: ['./offer-create-page.component.scss']
})
export class OfferCreatePageComponent implements OnInit {

  ngOnInit(): void {
    if (localStorage.getItem('authentication') === null) {
      window.location.href = '/giris';
    }
  }
  onClickExit() {
    localStorage.clear();
    window.location.href = '/giris';
  }

}
