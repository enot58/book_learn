import {React, useState} from "react"
import StarRating from "./components/StarRating";
import colorData from "./color-data.json"
import ColorLIst from "./components/ColorLIst";
import AddColorForm from "./components/AddColorForm";

// Состояние хранится на верху

function App() {

  const [colors, setColors] = useState(colorData)

  const removeColor = (id) => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors)
    
  }
  
  const rateColor = (id, rating) => {
    
    const newColors = colors.map(color => 
      color.id === id
      ? {...color, rating}
      : color
    )
    setColors(newColors)
  }

  return (
    <div className="App">
      <AddColorForm />
      
      <ColorLIst colors = {colors} 
        onRemoveColor = {
          removeColor
        }
        onRateColor ={
          rateColor
        }
      />
    </div>
  );
}

export default App;
