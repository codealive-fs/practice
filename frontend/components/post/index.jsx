import React from "react";


const API_URL = "http://localhost:1337";
const formatImageURL = (url) => `${API_URL}${url}`


export default ({ likes, description, url }) => {
  return (
    <div className="px-0.75 py-1.25  rounded border border-[#a3a3a3]">
      <img className="max-w-15.625" src={formatImageURL(url)} />
      <h1>Likes: {likes}</h1>
      <h1>Description: {description}</h1>
    </div>
  );
};
