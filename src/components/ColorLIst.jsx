import React from 'react'
import Color from './Color'

function ColorLIst({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {

    if (!colors.length) {
        return <div>Цвета не обнаружены</div>
    }

    return (
        <div>
            {
                colors.map((color) => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate ={onRateColor}/>)
            }
        </div>
    )
}

export default ColorLIst