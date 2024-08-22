import React from "react";

export default ({ likes, description, url }) => {
  // console.log(post);
  return (
    <div className="px-0.75 py-1.25  rounded border border-[#a3a3a3]">
      <img className="max-w-15.625" src={`http://localhost:1337${url}`} />
      <h1>Likes: {likes}</h1>
      <h1>Description: {description}</h1>
    </div>
  );
};
