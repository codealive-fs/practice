"use client"
// import Image from "next/image";
import Post from "../../components/post";
import { useState, useEffect } from "react";

export function Home() {
  const [post, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/api/posts/?populate=*')
      const data = await response.json()
      setPosts(data?.data)
    }
    getPosts();
  }, [])
  
  return (
    <>
      {post.map(({ id, attributes }) => (
        <Post
        key={id}
        likes={attributes.likes}
        description={attributes.description[0].children[0].text}
        url={attributes.image.data.attributes.url}
        />
      ))}
    </>
  );
}
 
export default Home;