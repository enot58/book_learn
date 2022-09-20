import React from 'react';
import Color from './Color'
import { useColors } from "../hooks/colors_hook"

function ColorLIst(
    // **** С добавлением useContext этот код больше не нужен****
    // { colors = [], 
    //     onRemoveColor = f => f,
    //     onRateColor = f => f }
    ) {

    const { colors } = useColors();

    if (!colors.length) {
        return <div>Цвета не обнаружены</div>
    }

    return (
        <div>
            {
                colors.map((color) => 
                <Color key={color.id} {...color} 
                // **** С добавлением useContext этот код больше не нужен****
                //onRemove={onRemoveColor} 
                //onRate ={onRateColor}
                />)
            }
        </div>
    )
}

export default ColorLIst