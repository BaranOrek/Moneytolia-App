import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent {
  name?: string;
  description?: string;
  date?: string;
  //form?: []

  constructor(private snackbar: MatSnackBar) { }

  onClick() {
    if (this.name != '' && this.name != undefined && this.description != '' && this.description != undefined) {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = (today.getDate());
      let d
      let m

      if (dd < 10) d = '0' + dd;
      if (mm < 10) m = '0' + mm;

      const formattedToday = d + '/' + m + '/' + yyyy;
      this.date = formattedToday;

      const formObj = {
        name: this.name,
        description: this.description,
        date: this.date,
        offerCount: 0
      }
      let x = []
      x.push(formObj)
      if (localStorage.getItem('offers') == null || localStorage.getItem('offers') == '{}' || localStorage.getItem('offers') == undefined) {
        localStorage.setItem('offers', JSON.stringify(x));
        this.snackbar.open('aktarım başarılı', 'X', { duration: 2000 });
        this.name = '';
        this.description = '';
      } else if (localStorage.getItem('offers') != null) {
        let y = JSON.parse(localStorage['offers'])
        y.push(formObj)
        localStorage.setItem('offers', JSON.stringify(y));
        this.snackbar.open('aktarım başarılı', 'X', { duration: 2000 });
        this.name = '';
        this.description = '';
      }
    }
  }
}
