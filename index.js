let currentQuote = '';
let currentAuthor = '';

async function getQuote() {
  const response = await fetch(
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  );
  const data = await response.json();
  const randomQuote =
    data.quotes[Math.floor(Math.random() * data.quotes.length)];
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  document.getElementById('quote').textContent = currentQuote;
  document.getElementById('author').textContent = currentAuthor;
}
getQuote();
