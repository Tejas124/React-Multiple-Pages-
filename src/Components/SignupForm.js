import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"",
                                              createPassword:"", confirmPassword:""});
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    let navigate = useNavigate();

    
    function changeHandler(event){
        setFormData( (prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.createPassword !== formData.confirmPassword){
            toast.error("Passwords should be same");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Successfully Created!")

        navigate("/login");

        const accountData = {
            ...formData,
            accountType
        }

        console.log(accountData);
    }

    

  return (
    <div>
        <div className='bg-richblack-800 max-w-max text-richblack-5 p-1 my-6 rounded-full gap-x-1'>
            <button className={`${accountType === "student" 
            ?
                "bg-richblack-900 text-richblack-5" 
            :   
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
            onClick={() => setAccountType("student")}>
                Student
            </button>
            <button className={`${accountType === "instructor"  
            ?
                "bg-richblack-900 text-richblack-5" 
            :   
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* First name and last name */}
            <div className='flex gap-x-5 mb-2'>
                <label className='w-full'>
                    <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1'>
                    First Name <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type='text'
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        name='firstName'
                        onChange={changeHandler}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />
                </label>

                <label className='w-full'>
                    <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1'>
                    Last Name <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type='text'
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        name='lastName'
                        onChange={changeHandler}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />
                </label>
            </div>

            <label>
                <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>
                Email Address <sup className='text-pink-200'>*</sup></p>

                <input
                    required
                    type='email'
                    placeholder='Enter Email Address'
                    value={formData.email}
                    name='email'
                    onChange={changeHandler}
                    className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-2'
                />
            </label>

            <div className='flex gap-x-5'>
                {/* Create and confirm password */}
                <label className='relative w-full'>
                    <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>
                    Create Password <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type= { showPassword ? ("text") : ("password")}
                        placeholder='Enter Password'
                        value={formData.createPassword}
                        name='createPassword'
                        onChange={changeHandler}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-2'
                    />

                    <span onClick={() => setShowPassword( (prev) => !prev)}
                    className='absolute right-3 top-[42px] cursor-pointer'>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative  w-full'>
                    <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>
                    Confirm Password <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type= { showConfirmPassword ? ("text") : ("password")}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        name='confirmPassword'
                        onChange={changeHandler}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />

                    <span onClick={() => setShowConfirmPassword( (prev) => !prev)}
                    className='absolute right-3 top-[44px] cursor-pointer'>
                        {showConfirmPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>


            </div>

            <button className='w-full rounded-md p-3 bg-yellow-50 font-medium mt-6 mb-6'>
                Create Account
            </button>

        </form>

        
    </div>
  )
}

export default SignupForm