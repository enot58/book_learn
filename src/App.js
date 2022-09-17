import {React, useState} from "react"
import StarRating from "./components/StarRating";
import colorData from "./color-data.json"
import ColorLIst from "./components/ColorLIst";

function App() {

  const [colors] = useState(colorData)

  return (
    <div className="App">
      <ColorLIst colors = {colors} />
    </div>
  );
}

export default App;
