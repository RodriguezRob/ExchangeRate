const currencyElOne = document.getElementById("currency-one");
const currencyElTwo = document.getElementById("currency-two");
const amountElOne = document.getElementById("amount-one");
const amountElTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//Fetch Currency Rates, Update the dom

function calculate() {
    const  currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;

    fetch( `https://v6.exchangerate-api.com/v6/6851c3b66e13f69bcd1dbe77/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) =>{
        const rate = data.conversion_rates[currencyTwo];
        rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
        console.log(rate);
amountElTwo.value = (amountElOne.value * rate);
    })

}

currencyElOne.addEventListener('change',calculate);
currencyElTwo.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
amountElTwo.addEventListener('input', calculate);

swap.addEventListener('click', () =>{
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
});