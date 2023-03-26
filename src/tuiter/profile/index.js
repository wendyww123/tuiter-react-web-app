import React from "react";
import {useSelector} from "react-redux";
import "./index.css"
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profileInfo = useSelector(state => state.profile)
    const birthDate = new Date(profileInfo.dateOfBirth)
    birthDate.setDate(birthDate.getDate() + 1)
    return(
        <div className="container border-start border-end ps-0 pe-0">
            <div className="row wd-height-70">
                <Link className="col-2 text-center mt-auto mb-auto text-dark" to="/tuiter/"><i className="fa fa-arrow-left"/></Link>
                <div className="col-8 mt-auto mb-auto">
                    <h4>{profileInfo.name}</h4>
                    <p className="mb-0">{profileInfo.total_tuits.toLocaleString()} Tuits</p>
                </div>
            </div>
            <div className="wd-profile-images-div">
                <img className="w-100" src={`/images/${profileInfo.bannerPicture}`} alt="#"/>
                <img className="wd-profile-picture rounded-circle" src={`/images/${profileInfo.profilePicture}`} alt="#"/>
                <Link className="btn btn-outline-secondary rounded-pill float-end m-3" to="/tuiter/edit-profile/"><span className="fw-bold">Edit Profile</span></Link>
            </div>
            <div className="w-100 p-3">
                <div>
                    <h4 className="fw-bolder mb-0">{profileInfo.name}</h4>
                    <p className="text-secondary fw-semibold">{profileInfo.handle}</p>
                </div>
                <p className="">{profileInfo.bio}</p>
                {profileInfo.website ? <p>{profileInfo.website}</p> : (<></>)}
                <div className="text-secondary">
                    <span className="me-3"><span className="pe-2"><i className="fa fa-location-dot"/></span><p className="d-inline-block">{profileInfo.location}</p></span>
                    <span className="me-3"><span className="pe-2"><i className="fa fa-cake-candles"/></span><p className="d-inline-block">Born {birthDate.toLocaleDateString('en-us', {month:"long", day: "numeric", year:"numeric"})}</p></span>
                    <span><span className="pe-2"><i className="fa fa-calendar"/></span><p className="d-inline-block">Joined {(new Date(profileInfo.dateJoined)).toLocaleDateString('en-us', {month:"long", year:"numeric"})}</p></span>
                </div>
                <div>
                    <span className="me-4"><span className="fw-bold">{profileInfo.followingCount}</span><span className="text-secondary"> Following</span></span>
                    <span><span className="fw-bold">{profileInfo.followersCount}</span><span className="text-secondary"> Followers</span></span>
                </div>
            </div>
        </div>
    );
};
export default ProfileComponent;