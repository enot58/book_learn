import {React, useState} from "react"
import StarRating from "./components/StarRating";
import colorData from "./color-data.json"
import ColorLIst from "./components/ColorLIst";
import AddColorForm from "./components/AddColorForm";
import { v4 as uuidv4 } from 'uuid';


// Состояние хранится на верху

function App() {


  // **** С добавлением useContext этот код больше не нужен****
  // const [colors, setColors] = useState(colorData)

  // const removeColor = (id) => {
  //     const newColors = colors.filter(color => color.id !== id);
  //     setColors(newColors)
    
  // }
  
  // const rateColor = (id, rating) => {
    
  //   const newColors = colors.map(color => 
  //     color.id === id
  //     ? {...color, rating}
  //     : color
  //   )
  //   setColors(newColors)
  // }

  // const addNewColor = (title, color) => {
  //   const newColors = [
  //     ...colors,
  //     {
  //       id: uuidv4(),
  //       rating: 0,
  //       title,
  //       color
  //     }
  //   ];
  //   console.log(newColors);
  //   setColors(newColors)
  // }

  return (
    // **** С добавлением useContext этот код больше не нужен****

    // <div className="App">
    //   <AddColorForm onNewColor={addNewColor} />
       
    //   <ColorLIst colors = {colors} 
    //     onRemoveColor = {
    //       removeColor
    //     }
    //     onRateColor ={
    //       rateColor
    //     }
    //   />
    // </div>

    <>
      < AddColorForm />
      < ColorLIst />
    </>

  );
}

export default App;
