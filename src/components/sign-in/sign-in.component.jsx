import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../firebase/firebase.utils' 

import './sign-in.styles.scss'

class SignIn extends React.Component {

    constructor() {
        super()
        this.state = { email: '', password: '', loader: false }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.state
        this.setState({loader: true})
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password:'', loader: false })
        } catch(error) {
            this.setState({loader: false})
            console.log(error)
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='Email' type='email' name='email' value={this.state.email} required />
                    <FormInput handleChange={this.handleChange} label='Password' type='password' name='password' value={this.state.password} required />
                    <div className='buttons'>
                        {
                            this.state.loader ? (
                                                    <div className="loader"></div>
                                                )
                                              : (
                                                <CustomButton type='submit'>Submit Form</CustomButton>
                                              )
                        }
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn