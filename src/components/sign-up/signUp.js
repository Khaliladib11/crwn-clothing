import React from 'react';
import './signUp.css';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = (event) =>{
        const {value, name} = event.target;
        this.setState( {[name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("passowrd don't match");
            return;
        }
        try{

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }catch(error){
            console.log(error);
        }
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="signUp">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                    name='displayName'
                    type='text'
                    value={displayName}
                    required
                    handelChange={this.handleChange}
                    label="Display Name"
                />
                <FormInput 
                    name='email'
                    type='email'
                    value={email}
                    required
                    handelChange={this.handleChange}
                    label="Email"
                />
                <FormInput 
                    name='password'
                    type='password'
                    value={password}
                    required
                    handelChange={this.handleChange}
                    label="Password"
                />
                <FormInput 
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    required
                    handelChange={this.handleChange}
                    label="Confirm Password"
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;