import React from 'react';
import './sign-in-up.style.css';

import SignIn from '../../components/sign-in/signIn';
import SignUp from '../../components/sign-up/signUp';

const SignInUp = () => {
    return(
        <div className='signInUp'>
           <SignIn />
           <SignUp />
        </div>
    )
}

export default SignInUp;