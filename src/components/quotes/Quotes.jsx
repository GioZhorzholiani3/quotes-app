// import React from "react";
// import { useEffect, useState } from "react";

// const Quotes = () => {
//   const [quotes, setQuotes] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://type.fit/api/quotes");
//       const data = await response.json();
//       setQuotes(data);
//       console.log("fetch data");
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Quotes</h1>
//       {console.log(quotes)}
//       <ul>
//         {quotes.map((quote, idx) => (
//           <li key={idx + "text"}>{quote.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Quotes;

import React, { useState, useEffect } from "react";
import "./Quotes.module.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    }
    fetchData();
  }, []);

  const handleRandomQuote = () => {
    if (quotes.length === 0) {
      return;
    }
    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];
    setRandomQuote(randomQuote);
    console.log(randomQuote);
  };

  return (
    <div className="container">
      <h1>Random Quotes</h1>
      <button onClick={handleRandomQuote}>Generate Random Quote</button>
      {randomQuote && (
        <div className="quote-container">
          <p>{randomQuote.text}</p>
          <p>- {randomQuote.author}</p>
        </div>
      )}
    </div>
  );
};

export default Quotes;
