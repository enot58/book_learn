import React from 'react';
import {FaStar} from "react-icons/fa";
// Общий компонент для звёзд

const StarRating = () => {
    return [
        <FaStar color="red"/>,
        <FaStar color="red"/>,
        <FaStar color="red"/>,
        <FaStar color="grey"/>,
        <FaStar color="grey"/>
    ]
};

export default StarRating;