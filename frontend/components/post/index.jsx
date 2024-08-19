import React from "react";

const post = {
                likes: 5,
                description: "New Mountains at night looks wonderful.",
                image: {
                    url: "/uploads/mark_basarab_1_Ot_Uk_D_8svc_unsplash_cdacf2bd7b.jpg"
                }
            }

    const API_URL = "http://localhost:1337";
    const formatImageURL = (url) => `${API_URL}${url}`
    console.log("imgeURL", formatImageURL())

    export default ({likes, url, description}) => {
        return (
        <div className="px-0.75 py-1.25  rounded border border-[#a3a3a3]">
            <img className="max-w-15.625" src={formatImageURL(url)} />
            <h1>Likes: {likes}</h1>
            <h1>Description: {description}</h1>
            <h4>{2 + 2}</h4>
        </div>
        )
    }
