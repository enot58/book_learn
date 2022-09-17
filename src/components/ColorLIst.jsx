import React from 'react'
import Color from './Color'

function ColorLIst({ colors = [], onRemoveColor = f => f }) {

    if (!colors.length) {
        return <div>Цвета не обнаружены</div>
    }

    return (
        <div>
            {
                colors.map((color) => <Color key={color.id} {...color} onRemove={onRemoveColor}/>)
            }
        </div>
    )
}

export default ColorLIst