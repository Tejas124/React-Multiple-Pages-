import React from 'react'
import Template from '../Components/Template';
import signUp from '../assets/signup.png';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Join the millions learning to code with studyNotion for free"
        desc1="Build skills for Today, Tomorrow and beyond"
        desc2="Education to Future-Proof your Career"
        image={signUp}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup;
