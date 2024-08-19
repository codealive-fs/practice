// import Image from "next/image";
import Post from "../components/post";

const posts =  {          
          likes: 89,
          description: "Bats are blood suckers.",
          image: {
              url: "/uploads/igam_ogam_VV_13d2ozcy4_unsplash_47af6e77c9.jpg"
          }
        };


export default function Home() {  
    return (
      <Post post={posts} />
  );
}
