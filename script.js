const getQuote = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const quoteObject = await response.json();

  label = document.getElementById('label');
  label.innerHTML = `ADVICE #${quoteObject.slip.id}`;

  quote = document.getElementById('quote');
  quote.innerHTML = quoteObject.slip.advice;
};

button = document.getElementById('button');
button.addEventListener('click', getQuote);
