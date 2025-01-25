import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='sticky top-0 z-50'>
      <header className='h-8 p-8 shadow-lg text-lg bg-slate-800 text-white hover:text-gray-500 cursor-pointer'>
        <ul className='flex justify-around' >
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/first">First</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
          <li>
            <Link to="/third">Third</Link>
          </li>
          <li>
            <Link to="/child">Child</Link>
          </li>
          <li>
            <Link to="/box">Box</Link>
          </li>
          <li>
            <Link to="/useref">UseRef</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}
