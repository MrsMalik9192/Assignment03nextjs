import React from 'react'


const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex-justify-between item-center'>
        <div className='text-xl font-medium'>Say not to Replica!!!</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='manuLink'><a href='#hero'>Home</a></li>
            <li className='manuLink'><a href='#about'>About</a></li>
         <li className='manuLink'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
