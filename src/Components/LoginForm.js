import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({email: "", password: ""});
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();


    function changeHandler(event){
        setFormData( (prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

        console.log(formData);
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem]'>
                Email Address
                <sup className='text-pink-200'>*</sup></p>

            <input 
                required
                type='email'
                placeholder='Enter Email id'
                value={formData.email}
                onChange={changeHandler}
                name='email'
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
        </label>

        <label className='w-full relative'>
            <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem]'>
            Password
            <sup className='text-pink-200'>*</sup></p>

            <input 
                required
                type={showPassword ? ("text") :("password")}
                placeholder='Enter Password'
                value={formData.password}
                onChange={changeHandler}
                name='password'
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />

            <span onClick={() => setShowPassword( (prev) => !prev)}
            className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password?</p>
            </Link>
        </label>

        <button className='w-full rounded-md p-3 bg-yellow-50 font-medium mt-6'>
            SignIn
        </button>
        

    </form>
  )
}

export default LoginForm