import { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

function FeedbackList({ feedback,handleDelete}) {
    if (!feedback || feedback.length === 0)
    {
        return <p>No FeedBack yet!</p>
    }

    return (
        <div className="feedbak-list">
            {feedback.map((item) => {
                return <FeedbackItem key={item.id} item={item}
                    handleDelete={ handleDelete} /> 
            })}
        </div>
    );
}


FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
            }
        )
    )
}


export default FeedbackList;