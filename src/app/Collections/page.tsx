import React from 'react'
import Link from "next/link";
import { useState } from "react";

const Collections = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    
    <div className=" my-2 lg:w-[1200px] lg:h-[800px] bg-[#DBDCDE] mx-auto" id="Collections"> 
   
        <div className=" text-center py-14">
            <h1 className="text-[#9B5D5D] text-4xl font-serif text-decoration-line: underline"> OUR COLLECTIONS</h1>
            <div className="flex justify-center"> 
            <p className=" text-center  py-3"> Elevate your seating experience with                          
            </p>
            <ul className="bg-[url('/sit&style.png')] lg:w-[120px] lg:h-[40px] bg-cover"> </ul>
        </div>
            <p className="text-center ">                         
            Explore our premium collection of chairs today.</p>

        </div>

        <div className =" flex justify-between px-16 py-11">
            
            <div className="flex-col justify-center"> 
            <div className="bg-[url('/loungeChairs/loungeChair1.jpg')] lg:w-[220px] lg:h-[300px] bg-cover rounded-3xl border-white shadow-lg border-2 shadow-gray-600">

            </div>
            <h2 className="my-3 mx-9 text-xl">
                LOUNGE CHAIRS
            </h2>
            <button className="mx-5 text-xl bg-[#6E7968] rounded-3xl w-44 text-white py-2  hover:text-black">
            <Link href="#LoungeChairs" onClick={() => setNavbar(!navbar)}>
                View Collection
                </Link>
            </button>
            </div>
        
            <div className="flex-col justify-center"> 
            <div className="bg-[url('/diningChairs/diningChair1.jpg')] lg:w-[220px] lg:h-[300px] bg-cover rounded-3xl border-white shadow-lg border-2 shadow-gray-600">

            </div>
            <h2 className="my-3 mx-9 text-xl">
                DINING CHAIRS
            </h2>
            <button className="mx-5 text-xl bg-[#6E7968] rounded-3xl w-44 text-white py-2 hover:text-black">
            <Link href="#DiningChairs" onClick={() => setNavbar(!navbar)}>
                View Collection
                </Link>
            </button>
            </div>

            <div className="flex-col justify-center"> 
            <div className="bg-[url('/officeChairs/officeChair1.jpg')] lg:w-[220px] lg:h-[300px] bg-cover rounded-3xl border-white shadow-lg border-2 shadow-gray-600">

            </div>
            <h2 className="my-3 mx-9 text-xl">
                OFFICE CHAIRS
            </h2>
            <button className="mx-5 text-xl bg-[#6E7968] rounded-3xl w-44 text-white py-2 hover:text-black">
            <Link href="#OfficeChairs" onClick={() => setNavbar(!navbar)}>
                View Collection
                </Link>
            </button>
            </div>

            <div className="flex-col justify-center"> 
            <div className="bg-[url('/outdoorChairs/outdoorChair1.jpg')] lg:w-[220px] lg:h-[300px] bg-cover rounded-3xl border-white shadow-lg border-2 shadow-gray-600">

            </div>
            <h2 className="my-3 mx-8 text-xl">
                OUTDOOR CHAIRS
            </h2>
            <button className="mx-5 text-xl bg-[#6E7968] rounded-3xl w-44 text-white py-2 hover:text-black">
            <Link href="#OutdoorChairs" onClick={() => setNavbar(!navbar)}>
                View Collection
                </Link>
            </button>
            </div>

        </div>

        </div>
  )
}

export default Collections 