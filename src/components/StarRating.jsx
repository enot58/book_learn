import {React, useState} from 'react';
import {FaStar} from "react-icons/fa";
// Общий компонент для звёзд

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar onClick={onSelect} color={selected ? "red" : "grey"} />
);

const createArray = length => [...Array(length)];

const StarRating = ({totalStars = 5}) => {

    const [selectedStars] = useState(3)
 
    return (
        <>
            {createArray(totalStars).map((n, i) => <Star key = {i} selected = {selectedStars > i} />)}
        </>
    )
};

export default StarRating;