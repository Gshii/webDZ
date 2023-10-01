function currencyExchange(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        usd: 37.0,
        uah: 1.0,
        eur: 40.0
    };

    if (!(fromCurrency.toLowerCase() in exchangeRates) || !(toCurrency.toLowerCase() in exchangeRates)) {
        return "Непідтримувана валюта";
    }

    if (amount <= 0) {
        return "Сума для обміну повинна бути додатньою";
    }

    const result = (amount * exchangeRates[fromCurrency.toLowerCase()]) / exchangeRates[toCurrency.toLowerCase()];
    return `${amount} ${fromCurrency.toUpperCase()} = ${result.toFixed(2)} ${toCurrency.toUpperCase()}`;
}

const amount = 100;
const fromCurrency = "usd";
const toCurrency = "uah";
const result = currencyExchange(amount, fromCurrency, toCurrency);
console.log(result);
