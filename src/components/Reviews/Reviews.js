import Comment from "../Comment/Comment";
import useComments from "../hooks/UseComments";

const Reviews = () => {
    const [comments, setComments] = useComments();
    return (
        <div className="customer-reviews mx-24">
            <h3 className="font-semibold text-2xl text-gray-800 my-20">
                Customer Review({comments.length})
            </h3>
            <div className="reviews grid grid-cols-3">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}></Comment>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
