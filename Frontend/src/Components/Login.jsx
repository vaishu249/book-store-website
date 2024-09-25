import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        
                        {/* Email Input */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input 
                                type="email" 
                                placeholder='Enter Your Email' 
                                className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none' 
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Password Input */}
                        <div className='mt-4 space-y-2'>
                            <span>Password </span><br />
                            <input 
                                type="password" 
                                placeholder='Enter Your Password' 
                                className='md:w-96 w-80 py-1 px-3 border rounded-md outline-none' 
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-around mt-4'>
                            <button 
                                type="submit"
                                className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-slate-900 duration-300 cursor-pointer'>
                                Login
                            </button>
                            <p className='px-4 py-2'>Not Registered? 
                                <Link
                                    to="/signup"
                                    className='underline text-blue-500 cursor-pointer'
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
