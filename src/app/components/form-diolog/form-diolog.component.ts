import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Offer } from 'src/app/Offer';

@Component({
  selector: 'app-form-diolog',
  templateUrl: './form-diolog.component.html',
  styleUrls: ['./form-diolog.component.scss']
})
export class FormDiologComponent implements OnInit {
  name?: any;
  description?: any;
  index?: number;
  offers?: Offer[]
  offer?: Offer


  onClick() {
    if (this.name != '' && this.name != undefined && this.description != '' && this.description != undefined) {
      this.offers?.forEach((value, i) => {
        if (i == this.data) {
          value.name = this.name;
          value.description = this.description;
        }
      })

      localStorage.setItem('offers', JSON.stringify(this.offers))
    }


  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {

    if (localStorage.getItem('offers') != null) {
      this.offers = JSON.parse(localStorage['offers']);
      console.log(this.offers)
    }


  }

}
