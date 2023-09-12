class UI {
    constructor() {
        this.init()
    }
    init() {
        this.printCryptoCurrencies();
    }
    printCryptoCurrencies() {
        cryptoAPI.getCryptoCurrenciesList()
            .then((response) => {
                // build the select from the rest api
                const select = document.getElementById('cryptocurrency');

                // add the data from the api into tthe select
                response.forEach((cryptocurrency) => {
                    // add the options
                    const option = document.createElement('option');

                    // console.log(cryptocurrency);
                    option.value = `${cryptocurrency.id}`;
                    option.appendChild(document.createTextNode(`${cryptocurrency.name}`));

                    select.appendChild(option);

                    // const cryptocurrencyID = cryptocurrency.id;

                    // return cryptocurrencyID;
                });
                
            })
    }

    // prints message to fill all fields mandatorily
    printErrorMessage(message, className) {
        // create div of error message
        const div = document.createElement('div');
        // add classname
        div.className = className;
        // append message
        div.appendChild(document.createTextNode(message));
        // append into div class = "message"
        const errorMessage = document.querySelector('div .messages');
        errorMessage.appendChild(div);
        // remove error message after 2 seconds
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 2000)
    }

    // prints the price of the crypto in the html
    displayResult(crypto) {
        
        // build the html template
        let HTMLTemplate = '';
        HTMLTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${crypto.name} is $${crypto.price_usd}</p>
                    <p>Rate in last 1hr: ${crypto.percent_change_1h}%</p>
                    <p>Rate in last 24hrs: ${crypto.percent_change_24h}%</p>
                    <p>Rate in last 7days: ${crypto.percent_change_7d}%</p>
                </div>
            </div>
        `;

        //shows the spinner
        this.showspinner();

        // remove spinner after 3 secs
        setTimeout(() => {
            // add into the div id="result" in the dom
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = HTMLTemplate;

            // remove the spinner
            document.querySelector('.spinner img').remove();
        }, 3000)

        // remove the previous result
        const prevResult = document.querySelector('#result div');
        if (prevResult) {
            prevResult.remove();
        }
    }

    // prints the spinner image
    showspinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif';
        // append into div with spinner class
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}