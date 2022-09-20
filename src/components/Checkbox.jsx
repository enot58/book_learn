import React, { useState, useEffect, useReducer } from 'react'

function Checkbox() {
    // const [checked, setChecked] = useState(false);

    const [checked, toggle] = useReducer(checked => !checked, false)

    //alert(`checked: ${checked.toString()}`);
    useEffect(() => {
        //alert(`checked: ${checked.toString()}`);
        //console.log(checked ? "Yes, checked" : "No, not checked");
        
    })

    // function toggle () {
    //     setChecked(checked => !checked)
    // }

  return (
    <>  
        <h4>Чекбокс</h4>
        <input 
            type="checkbox" 
            value = {checked}
            onChange = {toggle}
        />

        {checked ? "checked" : "not checked"}
    </>
  )

  
}

export default Checkbox