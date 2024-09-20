import React from 'react'
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
        <div className='flex h-screen items-center justify-center '>
            <div id="my_modal_3" className="border=[2px] shadow-md p-5 rounded-md">
                <div className="">
                    <form method="div">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input type="email" placeholder='Enter Your Email' className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none' />
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input type="password" placeholder='Enter Your Password' className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none' />
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-slate-900 duration-300 cursor-pointer'>Login</button>
                        <p className='px-4 py-2'>Not Registered ? <Link
                            to="/signup"
                            className='underline text-blue-500 cursor-pointer'
                        >
                            Signup
                        </Link>{" "}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
