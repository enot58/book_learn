import React, { createContext, useContext, useState } from 'react'
import ColorData from "../color-data.json"
import { v4 as uuidv4 } from 'uuid';

const ColorContext = createContext();


export const useColors = () => useContext(ColorContext)



function ColorProvider({children}) {

    const [colors, setColors] = useState(ColorData)

    // Добавим возможность совершать определённые действия с цветами

    // Добавим возможность добавления нового цвета
    const addColor = (title, color) => {
        setColors([
            ...colors,
            {
                id: uuidv4(),
                rating: 0,
                title,
                color
            }
        ])
    }
    // Возможность выбрать рейтинг
    const rateColor = (id, rating) => {
        setColors(
            colors.map(color => (
                color.id === id ?
                {...color, rating} :
                color
            ))
        )
    }

    // Удаления цвета
    const removeColor = id => setColors(colors.filter((color) => color.id !== id))


  return (
    <ColorContext.Provider value={{colors, addColor, rateColor, removeColor}}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider;