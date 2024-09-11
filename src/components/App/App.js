import { React } from "react";
import "./App.css";
import Instructions from "../Instructions/Instructions";
const emojis = [
  {
    emoji: "😄",
    name: "HAPPY FACE",
  },
  { emoji: "🎉", name: "HAPPY PARTY" },
  { emoji: "💃", name: "WOMAN DANCING" },
];
const displayAction = true;
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>

      {displayAction && <p>Are you Ready</p>}
      <Instructions />

      <ul>
        {emojis.map((emoji) => (
          <li onClick={(event) => alert(emoji.name)}>{emoji.emoji}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
