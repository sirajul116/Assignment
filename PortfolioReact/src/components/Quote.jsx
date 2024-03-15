import React, { useState } from 'react';

let quotes = [];
async function loadQuotes() {
  const response = await fetch('https://type.fit/api/quotes');
  quotes = await response.json();
}

const Quote = () => {
  const [quote, setQuote] = useState({
    text: 'Pera nai Chill',
    author: 'Engineering Student',
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  loadQuotes();

  return (
    <>
      <div className=" h-40 ml-40 mr-40 mt-10 mb-2 p-4 bg-blue-400 border rounded-md">
        <div className="grid place-items-center p-2 text-2xl h-3/4">
          {quote.text}
        </div>
        <div>
          <div></div>
          <div></div>
          <div className="grid place-items-center border-t-2 text-white">
            - {quote.author.split(',')[0]}
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <button
          className=" border rounded-md p-2 bg-white shadow-sm hover:bg-blue-600"
          onClick={() => {
            random();
          }}
        >
          Quote
        </button>
      </div>
    </>
  );
};

export default Quote;
