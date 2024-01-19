class Currency{
  constructor() {
    this.url =
      'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gpJtKGj5dJfBDagA0BmrVzTgx0sH6FGmS4mjN8cg&base_currency=';
  }
  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    const newAmount = amount * result.data[secondCurrency];

    return newAmount;
  }
}

class InverseCurrency{
  constructor() {
    this.url =
      'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gpJtKGj5dJfBDagA0BmrVzTgx0sH6FGmS4mjN8cg&base_currency=';
  }
  async inverseExchange(result, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const amount = await response.json();
    const needAmount = result / amount.data[secondCurrency] ;

    return needAmount;
  }
}