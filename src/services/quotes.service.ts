import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFav(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFav(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        })
        this.favoriteQuotes.splice(position, 1);
    }

    getFavQuote() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFav(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        })
    }

}