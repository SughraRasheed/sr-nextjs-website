'use client';
import Collections from "./Collections/page"
import LoungeChairs from "./LoungeChairs/page"
import DiningChairs from "./DiningChairs/page"
import OfficeChairs from "./OfficeChairs/page"
import OutdoorChairs from "./OutdoorChairs/page"
import AboutUs from "./AboutUs/page"
import ContactUs from "./ContactUs/page"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <main>
      <section  className=" bg-[url('/bg.jpg')] bg-cover bg-no repeat h-screen lg:w-[1200px] lg:h-[800px] mx-auto ">
      <div className='px-16 py-32'> 
        <nav className="">
        <ul className="space-x-5 text-base flex justify-start">
          <li className="cursor-pointer hover:text-white"> HOME </li>
          <li className="px-2 font-bold cursor-pointer text-[#9B5D5D] text-decoration-line: underline hover:text-red-900">
          <Link href="#Collections" onClick={() => setNavbar(!navbar)}>
             OUR COLLECTIONS
             </Link>
            </li>

            <li className="px-2 cursor-pointer hover:text-white"> 
            <Link href="#AboutUs" onClick={() => setNavbar(!navbar)}>
            ABOUT US
             </Link>
            </li>
            <li className="px-2 cursor-pointer hover:text-white"> 
            <Link href="#ContactUs" onClick={() => setNavbar(!navbar)}>
            CONTACT US 
             </Link></li>
        
        </ul>
        </nav>
        </div>
    <div className="mx-16 flex justify-between">
      
      <div> 
      <h1 className="lg:w-[600px] font-serif text-[#9B5D5D] text-7xl"> Premium Chairs For Every Space</h1>
      
      <p className="my-4 lg:w-[550px] text-xl"> Discover the perfect blend of comfort and style with 
our premium chair collection. Crafted for every space, 
designed for every lifestyle. </p>
<button className="w-52 border-1 border-black bg-[#9B5D5D] rounded-3xl py-2 text-xl font-semibold hover:text-white"> Explore Now</button>
    </div>
    
    <div className=" bg-[url('/CHAIR.png')] w-[400px] h-[400px] lg:w-[530px] lg:h-[500px] bg-cover "> 

    </div>
    
    </div>
    </section>
    <Collections/>
    <LoungeChairs/>
    <DiningChairs/>
    <OfficeChairs/>
    <OutdoorChairs/>
    <AboutUs/>
    <ContactUs/>
    </main>
  );
}
