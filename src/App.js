import {React, useEffect, useState} from "react"
import ColorLIst from "./components/ColorLIst";
import AddColorForm from "./components/AddColorForm";
import Checkbox from "./components/Checkbox";



// Состояние хранится на верху

function App() {

  const [val, set] = useState("")
  const [phrase, setPhrase] = useState("example");
  
  const createPhrase = () => {
    setPhrase(val);
    set("");
  }

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val])

  useEffect(() => {
    console.log(`saved phase: "${phrase}"`);
  }, [phrase])




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

    <>
      <label>Favorit phrase:</label>

      <input 
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />

      <button onClick={createPhrase}>Send</button>
    </>

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

    //<>
      /* < Checkbox />
      < AddColorForm />
      < ColorLIst /> */


    //</>




  );
}

export default App;
