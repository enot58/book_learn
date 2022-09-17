import React from 'react'
import StarRating from './StarRating'
import {FaTrash} from "react-icons/fa"




function Color({color, title, rating, onRemove = f => f}) {
  return (
    <section>
        <h1>{title}</h1>
        <button onClick = {onRemove(id)}>
          <FaTrash />
        </button>
        <div style={{height: 50, backgroundColor: color}}/>
        <StarRating selectedStars = {rating}/>
    </section>
  )
}

export default Color