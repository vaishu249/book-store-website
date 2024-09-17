import React from 'react'

// slider for cards 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/list.json"
const Freebook = () => {
  //filter out the data with a category 
  const filterData=list.filter((data) =>data.category==="Free");
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <h1 className='font-semibold text-xl pd-2'>
        <span className='text-orange-500 text-3xl'>Free books</span> Offered for You !!!
      </h1>
      <p>Discover a world of knowledge and imagination with
         our exclusive free book offer! For a limited time, 
         we're giving away captivating reads from a wide variety 
         of genres, including fantasy, mystery, romance, self-help, 
         and more.
      </p>
    </div>
    </>
  )
}

export default Freebook
