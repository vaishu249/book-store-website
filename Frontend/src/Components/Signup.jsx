import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className='w-[600px]' >
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>

                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">SignUp</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span><br />
                                <input type="text" placeholder='Enter Your name' className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none' {...register("name", { required: true })} />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input type="email" placeholder='Enter Your Email' className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input type="password" placeholder='Enter Your Password' className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none' {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-slate-900 duration-300 cursor-pointer'>SignUp</button>
                                <p className='px-4 py-2'>Have Account ?
                                    <button
                                        className='underline text-blue-500 cursor-pointer'
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
