import React from 'react'
import Link from 'next/link'


function Nav() {
  return (
    <div>
      <ul>
          <li>
            <Link href="/Home">Home</Link>
          </li>
          <li>
            <Link href="/Create" className="">Create</Link>
          </li>
          <li>
            <Link href="/About" className="">About</Link>
          </li>
      </ul>
    </div>
  )
}

export default Nav