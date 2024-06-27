import Currency from './3-currency.js';

const usd = new Currency('USD', 'United States Dollar');

console.log(usd.code); // USD
console.log(usd.name); // United States Dollar
usd.displayFullCurrency(); // United States Dollar (USD)

usd.code = 'EUR';
usd.name = 'Euro';
usd.displayFullCurrency(); // Euro (EUR)

try {
    usd.code = 123; // This will throw an error
} catch (e) {
    console.error(e.message); // Code must be a string
}

try {
    usd.name = { name: 'Pound' }; // This will throw an error
} catch (e) {
    console.error(e.message); // Name must be a string
}

