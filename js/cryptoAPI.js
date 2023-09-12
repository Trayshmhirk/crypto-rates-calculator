// create the cryptoclass for fetching the rest apis

class CryptoAPI {
    // query the rest api with currency and cryptocurrency
    async queryAPI (cryptocurrencyID) {
        // build the url
        const priceUrl = await fetch(`https://api.coinlore.net/api/ticker/?id=${cryptocurrencyID}`);

        // return as a json
        const cryptoPrice = await priceUrl.json();

        return cryptoPrice;
    }
    
    // get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        // fetch api
        const url = await fetch("https://api.coinlore.net/api/tickers/");

        // return as a json
        const cryptoCurrencies = await url.json();

        return cryptoCurrencies.data;

    }
}