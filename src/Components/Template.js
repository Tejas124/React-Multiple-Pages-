import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, setIsLoggedIn, image, formtype}) => {
  return (
    <div className='flex flex-row w-11/12 max-w-[1160px] py-12 gap-x-32 gap-y-0 mx-auto justify-between'>

        <div className='w-11/12 masx-w-[450px] '>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.25rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br></br>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex items-center'>
                <div className='h-0 w-[50%] border border-richblack-700'></div>
                <div className='text-richblack-100 mx-4'>OR</div>
                <div className='h-0 w-[50%] border border-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center border border-richblack-700 rounded-md
                                py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p className='text-richblack-100 font-medium'>SignIn with Google</p>
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage} 
            alt='Frame' 
            width={558} 
            height={504} 
            loading="lazy"
            className='absolute left-4'
            />

        <img src={image} 
            alt='Students' 
            width={558} 
            height={504} 
            loading="lazy"
            className='absolute -top-4'
            />
        </div>
    </div>
  )
}

export default Template