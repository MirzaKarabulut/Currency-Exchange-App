const amountInput = document.querySelector('#amount');
const firstOption = document.querySelector('#firstCurrencyOption');
const secondOption = document.querySelector('#secondCurrencyOption');
const resultInput = document.querySelector('#result');

const currency = new Currency(); 

const inverseCurrency = new InverseCurrency();

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

  currency.exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(3); //Show three digit
    })
}


function inverseExchange() {
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
  const resultInputValue = Number(resultInput.value.trim());

  inverseCurrency.inverseExchange(resultInputValue, firstOptionValue, secondOptionValue)
    .then((amount) => {
      amountInput.value = amount.toFixed(3)
    })
}


function runEvents() {
  amountInput.addEventListener('input',exchange)
  resultInput.addEventListener('input',inverseExchange)
}

runEvents();