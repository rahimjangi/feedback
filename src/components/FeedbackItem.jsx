import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from 'prop-types';
import {FaTimes } from 'react-icons/fa';


function FeedbackItem({item,handleDelete}) {
    const [rating, setRating] = useState(item.rating);
    const [text, setText] = useState(item.text);
    // const handleClick = function () {
    //     setRating((prev) => {
    //         return prev + 1;
    //     })
    // }
    // const handleClick=(id)=>{console.log(id)}

    return (
        <Card reverse={true}>
            <div className="num-display">{rating}</div>
            <button onClick={()=>handleDelete(item.id)} className="close">
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">
                {text}
            </div>
            {/* <button onClick={handleClick}>add</button> */}
        </Card>
    );
}

FeedbackItem.propTypes = {
    item:PropTypes.object.isRequired
}

export default FeedbackItem;