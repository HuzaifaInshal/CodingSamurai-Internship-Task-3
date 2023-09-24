import React from 'react'
import Logo from '../components/Logo'

const Nav = () => {
  return (
    <>
  <nav>
        <ul className='flexr ul'>
          <li>
            <div className="a-holder">
            <a href="#home">Home</a>
            <div className="line"></div>
            </div>
          </li>
          <li>
          <div className="a-holder">
            <a href="#list">Articles</a>
            <div className="line"></div>
            </div>
          </li>
        </ul>
        <Logo></Logo>
        <ul className='flexr ul'>
          <li>
          <div className="a-holder-r">
            <a href="#about">About</a>
            <div className="line"></div>
            </div>
          </li>
          <li>
          <div className="a-holder-r">
            <a href="#contact">Contact</a>
            <div className="line"></div>
            </div>
          </li>
        </ul>
    </nav> 
    </>
  )
}

export default Nav