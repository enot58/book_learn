import React, { useRef, useState } from 'react'
import {useInput} from "../hooks/useInput"
import { useColors } from "../hooks/colors_hook"

function AddColorForm({ onNewColor = f => f }) {

    // Контролируемый компонент
    // Обычный useState меняем на свой useInput
    // const [title, setTitle] = useState("");
    // const [color, setColor] = useState("#000000");

    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput("#000000")

    const { addColor } = useColors();

    const submit = (e) => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value)
        resetTitle("");
        resetColor("");
        
    }

    return (
        <form onSubmit={submit}>
             <input 
                // value={title}
                // onChange={e => setTitle(e.target.value)}
                // Заменяем
                {...titleProps}

                //onChange={e => console.log(e.target.value)}
                type="text" 
                placeholder='color title...' 
                required 
                />
             <input 
                // value={color}
                // onChange={e => setColor(e.target.value)}
                // Заменяем

                {...colorProps}
                
                type="color" 
                required 
                />
             <button>ADD</button>
         </form>
    )
    
    // Императивный код (неконтролируемый) 
    // const txtTitle = useRef();
    // const hexColor = useRef();

    // const submit = e => {
    //     e.preventDefault();
    //     const title = txtTitle.current.value;
    //     const color = hexColor.current.value;
    //     onNewColor(title, color);
    //     txtTitle.current.value = "";
    //     hexColor.current.value = "";
    // }

    // return (

    //     <form onSubmit={submit}>
    //         <input ref={txtTitle} type="text" placeholder='color title...' required />
    //         <input ref={hexColor} type="color" required />
    //         <button>ADD</button>
    //     </form>

    // )
    
}

export default AddColorForm;