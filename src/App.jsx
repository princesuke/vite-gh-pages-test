import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Hello GitHub Pages</h1>
      <p>นี่คือเว็บไซต์ที่ deploy ด้วย React + Vite + gh-pages</p>
      <button onClick={() => setCount(count + 1)}>Click me: {count}</button>
    </div>
  );
}

export default App;
