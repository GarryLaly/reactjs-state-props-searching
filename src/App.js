import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import NewsItem from "./components/NewsItem";

function App() {
  const articleList = [
    {
      title: "Nasi goreng jawa",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Nasi goreng special",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Nasi goreng seafood",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Nasi goreng kepiting",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <div className="box-container">
        <img src={logo} className="box-logo" alt="logo" />
        <p className="box-text">Logo React</p>
        <div style={{ clear: "both" }} />
        <input
          placeholder="Ketik pencarian disini..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <h1 style={{ color: "green" }}>Hasil pencarian "{keyword}"</h1>
      <h1>Hasil pencarian "{keyword}"</h1>

      {articleList
        .filter((item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        )
        .map((item, index) => (
          <NewsItem key={index} title={item.title} subtitle={item.subtitle} />
        ))}
    </div>
  );
}

export default App;
