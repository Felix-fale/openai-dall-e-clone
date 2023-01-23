import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEINAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    console.log(response.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h3>Generate an image using Open AI API</h3>
      <input
        className="app-input"
        placeholder="Type something to Generate an Image..."
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate an Image</button>
    </div>
  );
}

export default App;
