import React from "react";

const Comment = ({ comment }) => {
    const { picture, name, date, rating, review } = comment;
    return (
        <div className="comment w-80 text-left flex flex-col justify-center items-center m-10">
            <div className="review-image h-full w-full">
                <img className="h-40" src={picture} alt="" />
            </div>
            <div className="review-details">
                <h2 className="text-blue-700 font-semibold">{name}</h2>
                <p className="font-mono text-sm  text-slate-600">{date}</p>
                <p className="font-mono text-xs text-amber-700">{rating}</p>
                <p className="text-slate-900 font-light text-sm " title={review}>
                    {review.length >= 70 ? review.slice(0, 70) + "..." : review}
                </p>
            </div>
        </div>
    );
};

export default Comment;
