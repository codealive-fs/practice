// "use client"
// import { useState } from "react";
// import Nav from '../../components/nav';


// export default async function Create(){

//     const [description, setDescription] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const response = await fetch('http://localhost:1337/api/posts/', {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                         description
//                     })
//             })
//             const data = await response.json();
//             console.log(data);
            
//     }

//     return (
//         <>
//             <Nav />
//             <div>
//                 <h1>Create Page</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                         placeholder='Description'
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                     <button type="submit">Submit</button>

//                 </form>
//             </div>
//         </>
//     )
// }

"use client";
import { useState } from "react";
import Nav from '../../components/nav';

export default function Create() {
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:1337/api/posts/?populate=*', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {description}
             })
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <>
            <Nav />
            <div>
                <h1>Create Page</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
