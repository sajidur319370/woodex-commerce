import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/table.png";
import Comment from "../Comment/Comment";
import useComments from "../hooks/UseComments";

const Home = () => {
    const [comments, setComments] = useComments();
    const firstThreeComments = comments.slice(0, 3);
    return (
        <div className="home">
            <div className="banner flex items-center justify-between bg-rose-100 mx-24">
                <div className="bannner-text   w-3/5 m-5 p-5">
                    <div className="banner-title font-semibold text-6xl text-gray-900 capitalize">
                        <h2>The glory comeback Furniture.</h2>
                    </div>
                    <p className="font-medium  text-lg text-slate-500 my-10">
                        Consider your home as a mood board, encapsulating your vision of
                        life within a few hundred or a few thousand square feet. How about
                        transforming it with some signature furniture pieces and adding some
                        warmth to the environment? Here's our ultimate guide to renting out
                        your house after doing it up in style.
                    </p>

                    <button className="h-14 w-40 border-2 border-blue-400 rounded-md duration-300 hover:bg-blue-400 text-slate-800 font-medium hover:text-white">
                        Purchase Now
                    </button>
                </div>
                <div className="banner-img w-1/3 m-5 p-5">
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="home-review my-20">
                <h3 className="font-semibold text-2xl text-gray-800 my-20">
                    Customer Review({comments.length})
                </h3>

                <div className="reviews grid grid-cols-3 mx-24">
                    {firstThreeComments.map((comment) => (
                        <Comment key={comment.id} comment={comment}></Comment>
                    ))}
                </div>

                <Link
                    to="/reviews"
                    className="border-2 px-5  py-4 border-blue-400 rounded-md duration-300 hover:bg-blue-400 text-slate-800 font-medium hover:text-white"
                >
                    See All Reviews
                </Link>
            </div>

            <div className="copyright">
                <p>
                    <small>
                        Copyright &copy; 2020 <span className="text-rose-400">Wodex </span>{" "}
                        . All Rights Reserved.
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Home;
