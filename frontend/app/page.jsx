"use client"
// import Image from "next/image";
import Post from "../components/post";
import { useState, useEffect } from "react";
// import Home from "./Home/page";
import Link from 'next/link';
import Nav from "../components/nav";



// export default function Home() {
export default function main() {
  return (
    <>
    <Nav />
    {/* <Link href="/Home">Home</Link>
                                              
    <Link href="/Create">Create</Link> */}
    </>
  );
}















///////////////////////
// "use client"
// // import Image from "next/image";
// import Post from "../components/post";
// import { useState, useEffect } from "react";

// export default function Home() {

//   const [post, setPosts] = useState([])

//   useEffect(() => {
//     const getPosts = async () => {
//       const response = await fetch('http://localhost:1337/api/posts/?populate=*')
//       const data = await response.json()
//       setPosts(data?.data)
//       console.log(data.attributes.image.data.attributes.url);
//     }
//     getPosts();
//   }, [])
  
//   return (
//     <>
//       {post.map(({ id, attributes }) => (
//         <Post
//         key={id}
//         likes={attributes.likes}
//         description={attributes.description[0].children[0].text}
//         url={attributes.image.data.attributes.url}
//         />
//       ))}
//     </>
    
//   );
// }
