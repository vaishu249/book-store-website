import React from 'react'
import Cards from "../Components/Cards";
import list from "../../public/list.json"
const Course = () => {
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
                <div className='mt-28 item-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        Master the Art of Reading with Our <span className='text-orange-500'>Exclusive Book</span> Collection
                    </h1>
                    <p className='mt-10'>
                        Welcome to the ultimate destination for book lovers!
                        Whether you're a seasoned reader or just beginning your
                        literary journey, our bookstore offers a carefully curated
                        selection of books across all genres. From timeless classics
                        to the latest bestsellers, we are passionate about bringing
                        the world of knowledge, imagination, and inspiration to your
                        fingertips.
                    </p>
                    <button className='bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-slate-900 duration-300 cursor-pointer mt-6'>
                        Back
                    </button>
                </div>
                <div className='mt-6 grid grid-cols-1 md:grid-cols-4 p-1'>
                    {
                        list.map((item)=>(
                            <Cards key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
