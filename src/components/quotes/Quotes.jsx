import React from "react";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      {console.log(quotes)}
      <ul>
        {quotes.map((quote, idx) => (
          <li key={idx + "text"}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
