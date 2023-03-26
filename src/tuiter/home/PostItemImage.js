import React from "react";

const PostItemImage = (image) => {
    return(
        <div className="card">
            <img className="card-img" src={`/images/${image}`}/>
        </div>
    );
};

export default PostItemImage;