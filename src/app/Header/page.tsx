import React from 'react'

const Header = () => {
  return (
    <div className="  lg:w-[1200px] lg:h-[0px]">
        <nav className="flex justify-between ">
        <ul className="mx-auto  bg-[url('/sit&style.png')] lg:w-[300px] lg:h-[100px] bg-cover ">
        </ul>
        <ul className="mx-9 my-12 flex justify-end space-x-5  text-base"> 
            <li >
              <input type="search" placeholder='search ' className=" mx-2 px-3 rounded-3xl " /> 
              <button> &#128269; </button>
            </li>
           
            <li className="px-2 cursor-pointer drop-shadow-xl  hover:text-white">  LOGIN </li>
            <li className="px-2 cursor-pointer  hover:text-white" > &#128722; MY CART </li>
            </ul>
            </nav>

        
    </div>
  )
}

export default Header
