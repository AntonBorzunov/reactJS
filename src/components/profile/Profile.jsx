import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./mypost/MyPostsContainer";

const Profile = (Props) => {
  

  return (
    <div className="Profile">
      <ProfileInfo img="https://avatars.mds.yandex.net/i?id=1b1bc8d6b76f9f447ca498c10c3813f591d07793-10156478-images-thumbs&n=13" />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;

// let postData =[
//     {id= {Props.id}, message:{Props.message}, likesCount: {Props.likesCount}}
//     ]
