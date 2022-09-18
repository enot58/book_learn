import {React, useState} from "react"
import StarRating from "./components/StarRating";
import colorData from "./color-data.json"
import ColorLIst from "./components/ColorLIst";

// Состояние хранится на верху

function App() {

  const [colors, setColors] = useState(colorData)

  const removeColor = (id) => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors)
    
  } 

  return (
    <div className="App">
      <ColorLIst colors = {colors} 
        onRemoveColor = {
          removeColor
        }
      />
    </div>
  );
}

export default App;
