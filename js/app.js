// instantiate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// create the variable

const form = document.getElementById('form');


// add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read the currency
    const currencySelect = document.getElementById('currency').value;
    // read the cryptocurrency
    const cryptocurrencyID = document.getElementById('cryptocurrency').value;

    

    // validate the select in the form
    if (currencySelect === '' || cryptocurrencyID === '') {
        ui.printErrorMessage('All Fields are Mandatory', 'deep-orange center-align darken-4 card-panel');
    } else {
        // query the rest api
        cryptoAPI.queryAPI(cryptocurrencyID)
            .then((response) => {
                ui.displayResult(response[0]);
            })
    }
    
})