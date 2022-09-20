import React, { useState, useEffect } from 'react'

function Checkbox() {
    const [checked, setChecked] = useState(false);

    //alert(`checked: ${checked.toString()}`);
    useEffect(() => {
        //alert(`checked: ${checked.toString()}`);
        //console.log(checked ? "Yes, checked" : "No, not checked");
        
    })

  return (
    <>  
        <h4>Чекбокс</h4>
        <input 
            type="checkbox" 
            value = {checked}
            onChange = {() => setChecked(checked => !checked)}
        />

        {checked ? "checked" : "not checked"}
    </>
  )

  
}

export default Checkbox