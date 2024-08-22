// import Image from "next/image";
import Post from "../components/post";

const post =  [{
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

export default function Home({likes, description, image, id, image.url}) {  
    return (
      <>
      {post.map((post) => (
        <Post
          key={id} 
          likes={likes}
          description={description}
          url={image && image.url} />
        ))}
      </>
  );
}
