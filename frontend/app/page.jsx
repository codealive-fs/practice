"use client"
// import Image from "next/image";
import Post from "../components/post";
import { useState, useEffect } from "react";


const mockPosts = [
  {
    id: 1,
    likes: 23,
    description: "Bats are blood suckers.",
    image: { url: "/uploads/igam_ogam_VV_13d2ozcy4_unsplash_47af6e77c9.jpg"}
  },
  {
    id: 2,
    likes: 12,
    description: "The worst thing about mentalilness is people expect you to behave as if you dont want.",
    image: { url: "/uploads/mark_basarab_1_Ot_Uk_D_8svc_unsplash_cdacf2bd7b.jpg"}
  },
  {
    id: 3,
    likes: 11,
    description: "Bats are good blood suckers.",
    image: { url: "/uploads/adam_willoughby_knox_snq_ARK_Tgoc_unsplash_bf1e7b92e2.jpg"}
  },
];


export default function Home() {

  const [post, setPosts] = useState([])

  useEffect(() => {
    useState(mockPosts)
  })

  return (
    <>
      {post.map(({ likes, description, image, id }) => (
        <Post key={id} likes={likes} description={description} url={image.url} />
      ))}
    </>
  );
}
