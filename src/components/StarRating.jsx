import {React, useState} from 'react';
import {FaStar} from "react-icons/fa";
// Общий компонент для звёзд

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar onClick={onSelect} color={selected ? "red" : "grey"} />
);

const createArray = length => [...Array(length)];

const StarRating = ({totalStars = 5, style = {},selectedStars = 0, onRate = f => f}) => {

    //const [selectedStars, setSelectedStars] = useState(0)
 
    return (
        <div style={{padding:"5px", ...style}}>
            {createArray(totalStars).map((n, i) => <Star key = {i} 
            selected = {selectedStars > i} 
            onSelect={() => onRate(i + 1)}
            />)}
            <p>Выбрано {selectedStars} из {totalStars}</p>
        </div>
    )
};

export default StarRating;