import React from 'react'
import TrollFace from '../images/Troll Face.png'

export default function Header() {
  return (
    <header className='header'>
      <img src={TrollFace} alt='Troll Face' />
      <h1 className='title'>Meme Generator</h1>
      <h4 className='header--desc'>React Course - Project 3</h4>
    </header>
  );
}
