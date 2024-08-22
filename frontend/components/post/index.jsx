import React from "react";

const post = [{
    id: 1,          
    likes: 23,
    description: "Bats are blood suckers.",
    image: {
        url: "/uploads/igam_ogam_VV_13d2ozcy4_unsplash_47af6e77c9.jpg"
    }
  },
  {
    id: 2,          
    likes: 12,
    description: "The worst thing about mentalilness is people expect you to behave as if you dont want.",
    image: {
        url: "/uploads/igam_ogam_VV_13d2ozcy4_unsplash_47af6e77c9.jpg"
    }
  },
  {
    id: 3,          
    likes: 11,
    description: "Bats are good blood suckers.",
    image: {
        url: "/uploads/igam_ogam_VV_13d2ozcy4_unsplash_47af6e77c9.jpg"
    }
  }
];

    const API_URL = 'http://localhost:1337';
    const formatImageURL = (url) => `${API_URL}${url}`;
    
    export default ({posts}) => {
        // console.log(post);
        return (
        <div className="px-0.75 py-1.25  rounded border border-[#a3a3a3]">
            <img className="max-w-15.625" src={formatImageURL(url)} />
            <h1>Likes: {likes}</h1>
            <h1>Description: {description}</h1>
        </div>
        )
    }
