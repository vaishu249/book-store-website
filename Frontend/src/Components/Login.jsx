import React from 'react'

const Login = () => {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input type="email" placeholder='Enter Your Email' className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none'/>
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input type="password" placeholder='Enter Your Password' className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none'/>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-slate-900 duration-300 cursor-pointer'>Login</button>
                        <p>Not Registered <span className='underline text-blue-500 cursor-pointer'>Signup</span></p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
