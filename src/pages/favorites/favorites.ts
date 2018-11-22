import { QuotePage } from './../quote/quote';
import { Component } from '@angular/core';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from '../../services/quotes.service';
import { ModalController } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService
    ) { }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavQuote();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (!remove) return

      this.onRemoveFromFav(quote);
    })
  }

  onRemoveFromFav(quote: Quote) {
    this.quotesService.removeQuoteFromFav(quote);
    this.quotes = this.quotesService.getFavQuote();
  }

  getBackground() {
    return this.settingsService.isChgSettings() ? 'altQuoteBackground': 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isChgSettings();
  }

}
