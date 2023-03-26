import React from "react";
import {useDispatch} from "react-redux";
import {toggleLiked} from "./tuits-reducer";

const TuitStats = ({tuitItem}) => {
    const dispatch = useDispatch();
    const toggleLikedClickHandler = (tI) => {
        dispatch(toggleLiked(tI))
    }
    return (
        <div className="d-flex flex-row w-100 pb-2">
        <span className="flex-fill wd-fg-color-gray">
          <i className="fa-regular fa-comment"/>
          <p className="d-inline ps-3">{tuitItem.replies}</p>
        </span>
            <span  className="flex-fill wd-fg-color-gray">
          <i className="fa-solid fa-retweet"/>
          <p className="d-inline ps-3">{tuitItem.retuits}</p>
        </span>
            <button onClick={() => toggleLikedClickHandler(tuitItem)} className="wd-fg-color-gray flex-fill bg-transparent border-0 p-0 text-start">
                <span className={tuitItem.liked ? "wd-fg-color-red" : ""}><i className="fa-solid fa-heart"/></span>
                <p className="d-inline ps-3">{tuitItem.likes}</p>
            </button>
            <span className="flex-fill wd-fg-color-gray">
          <i className="fa-solid fa-arrow-up-from-bracket"/>
        </span>
        </div>
    )
};

export default TuitStats;