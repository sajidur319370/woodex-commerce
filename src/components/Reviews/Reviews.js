import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Reviews = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('comments.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className="customer-reviews mx-24">
            <h3 className="font-semibold text-2xl text-gray-800 my-20">Customer Review({comments.length})</h3>
            <div className='reviews grid grid-cols-3'>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }

            </div>
        </div>

    );
};

export default Reviews;