import { NavParams, AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    private navParam: NavParams,
    private alertCtrl: AlertController,
    private quotesServce: QuotesService
    ) { }

  ngOnInit() {
    this.quoteGroup = this.navParam.data;
  }

  onAddToFav(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [{
        text: 'Yes, Go Ahead',
        handler: () => {
          this.quotesServce.addQuoteToFav(selectedQuote);
        }
      },
      {
        text: 'No, I changed my mind!',
        role: 'cancel',
        handler: () => {
          console.log('Cancelled');
        }
      }]
    });

    alert.present();
  }

  onRemoveFromFav(selectedQuote: Quote) {
    this.quotesServce.removeQuoteFromFav(selectedQuote);
  }

  isFav(selectedQuote: Quote) {
    return this.quotesServce.isQuoteFav(selectedQuote);
  }

}
