import React from 'react'

const AboutUs = () => {
  return (

    <div className="my-2 flex justify-start">
        <div className=" bg-[url('/aboutpage.jpg')] bg-cover bg-no repeat h-screen lg:w-[470px] lg:h-[800px] ">
        </div>
        <div className=" lg:w-[730px] lg:h-[800px] bg-[#6E7968] py-24">
            
                <h1 className=" text-5xl font-serif text-decoration-line: underline flex justify-center ">
                    ABOUT US
                </h1>
            <div className=" flex-col justify-center text-center px-14 py-5 text-white">
                <p className="lg:w-[600px] text-xl">
                At Sit & Style, we believe that seating should be more than 
just functional—it should be a statement of comfort, elegance, 
and personal style. Our mission is to offer a diverse range of 
chairs that elevate your living spaces, whether it’s your home, 
office, or outdoor area. Each chair in our collection is carefully 
crafted to blend timeless design with modern comfort, ensuring 
that you find the perfect seat for every occasion.
                </p>

                <p className="lg:w-[600px] text-xl py-3 ">
                We’re more than just a furniture brand; we’re here to help you 
create spaces that inspire relaxation, productivity, and connection. 
With an easy online shopping experience, dedicated customer service, 
and a passion for beautiful design, Sit & Style is your go-to
 destination for all things seating.
                </p>

                <p className="lg:w-[600px] text-xl">
                Thank you for choosing us to bring style and comfort to your spaces. 
                Sit back, relax, and let us help you make every seat your favourite.
                </p>
                
            </div>
                
        </div>

    </div>
  )
}

export default AboutUs