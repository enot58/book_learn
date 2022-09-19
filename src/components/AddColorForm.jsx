import React, { useRef, useState } from 'react'

function AddColorForm({ onNewColor = f => f }) {

    // Контролируемый компонент

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        onNewColor(title, color)
        setTitle("");
        setColor("");
        console.log(title, color);
    }

    return (
        <form onSubmit={submit}>
             <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
                //onChange={e => console.log(e.target.value)}
                type="text" 
                placeholder='color title...' 
                required 
                />
             <input 
                value={color}
                onChange={e => setColor(e.target.value)}
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