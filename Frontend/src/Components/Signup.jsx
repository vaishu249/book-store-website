import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
const Signup = () => {
  return (
    <>
        <div className='flex h-screen items-center justify-center '>
            <div className='w-[600px]' >
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">SignUp</h3>
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
                        <p className='px-4 py-2 text-xl'>Have Account ? 
                        <button
                            className='underline text-blue-500 cursor-pointer'
                            onClick={()=> document.getElementById("my_modal_3").showModal()}
                        >
                            Signup
                        </button>{" "}
                        <Login/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
