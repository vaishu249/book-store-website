import React from 'react'
import BannerImg from "../../public/baner.png"
const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-5 flex flex-col md:flex-row my-10'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 '>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold '>
                            Your Next Adventure Awaits<br /> Explore <span className='text-orange-500'>New Books</span><br /> Today !!!
                        </h1>
                        <p className='text-xl'>
                            At our online bookstore, we believe every reader deserves access to a world of stories that inspire, educate, and entertain. Whether you're a fan of timeless classics, eager to explore the latest bestsellers, or hunting for hidden literary gems, we have something for everyone.
                        </p>
                        <label className="input input-bordered flex itemszz-center gap-2 dark:bg-cyan-900 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow " placeholder="Email" />
                        </label>
                        <button className='btn hover:bg-slate-900 duration-300 cursor-pointer bg-orange-500 text-white'>Expolre</button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 order-1'>
                    <img src={BannerImg} alt="Baner-of-website" className='w-92 h-92 '/>
                </div>
            </div>
        </>
    )
}

export default Banner
