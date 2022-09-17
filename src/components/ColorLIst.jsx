import React from 'react'
import Color from './Color'

function ColorLIst({ colors = [] }) {

    if (!colors.length) {
        return <div>Цвета не обнаружены</div>
    }

    return (
        <div>
            {
                colors.map((color) => <Color key={color.id} {...color}/>)
            }
        </div>
    )
}

export default ColorLIst