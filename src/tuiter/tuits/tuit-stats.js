import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuitItem}) => {
    const dispatch = useDispatch();
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
            <span className="flex-fill">
          <button onClick={() => dispatch(updateTuitThunk({
              ...tuitItem,
              likes: (tuitItem.liked ? tuitItem.likes - 1 : tuitItem.likes + 1),
              liked: !tuitItem.liked
          }))} className="wd-fg-color-gray bg-transparent border-0 p-0 text-start">
          <span className={tuitItem.liked ? "wd-fg-color-red" : ""}><i className="fa-solid fa-heart"/></span>
          <p className="d-inline ps-3">{tuitItem.likes}</p>
        </button>
        </span>
            <span className="flex-fill">
          <button onClick={() => dispatch(updateTuitThunk({
              ...tuitItem,
              dislikes: (tuitItem.disliked ? tuitItem.dislikes - 1 : tuitItem.dislikes + 1),
              disliked: !tuitItem.disliked
          }))} className="wd-fg-color-gray bg-transparent border-0 p-0 text-start">
            <span className={tuitItem.disliked ? "wd-fg-color-green" : ""}><i className="fa-solid fa-thumbs-down"/></span>
            <p className="d-inline ps-3">{tuitItem.dislikes}</p>
          </button>
        </span>
            <span className="flex-fill wd-fg-color-gray">
          <i className="fa-solid fa-arrow-up-from-bracket"/>
        </span>
        </div>
    )
};

export default TuitStats;