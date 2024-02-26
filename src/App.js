// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from "react";
import fetch from "node-fetch";

async function query(data) {
  const response = await fetch(
      "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
      {
          headers: { Authorization: `Bearer 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` },
          method: "POST",
          body: JSON.stringify(data),
      }
  );
  const result = await response.json();
  return result;
}

function App() {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    query({inputs:{question:"Give an example of a creative Hello World",
      context:"Here are some examples creative Hello Worlds: helloooo world! HELLO world?? hey there"}}).then((response) => {
      console.log(JSON.stringify(response));
      setAnswer(response.answer);
  });
  }, [])

  return <div>{answer}</div>
}

export default App;