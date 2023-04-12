import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { toast } from 'react-hot-toast';

export const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] items-center mx-auto py-4'>
        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100 '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <Link to="#">Contact</Link>
            </ul>

            
        </nav>

        {/* Login - Signup - Logout - Dashboard */}

        <div className='flex gap-3 ml-4 text-richblack-100'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-slate-800 py-2 px-3.5 rounded-md border border-richblack-700'>Login</button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-slate-800 py-2 px-3.5 rounded-md border border-richblack-700'>SignUp</button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={ () => {
                            setLoggedIn(false);
                            toast.success("Logged Out");
                        }}
                        className='bg-slate-800 py-2 px-3.5 rounded-md border border-richblack-700'
                        >LogOut</button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-slate-800 py-2 px-3.5 rounded-md border border-richblack-700'>Dashboard</button>
                    </Link>
                }
            </div>
    </div>
  )
}
