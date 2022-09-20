import {React} from "react"
import ColorLIst from "./components/ColorLIst";
import AddColorForm from "./components/AddColorForm";



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
