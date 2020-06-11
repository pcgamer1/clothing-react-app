import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectIsUpLoading } from '../../redux/user/user.selector'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions'
import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = { displayName: '', email: '', password: '', confirmPassword: '', loader: false }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props
        if(password !== confirmPassword) {
            alert('Password do not match')
            return 
        }
        signUpStart({email, password, displayName})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        const { isUpLoading } = this.props
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Name' required/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                    <div className='buttons'>
                        {
                            isUpLoading ? (
                                <div className="loader"></div>
                            ) : (
                                <CustomButton type='submit'>SIGN UP</CustomButton>
                            )
                        }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isUpLoading: selectIsUpLoading
})

export default connect(mapStateToProps, {signUpStart})(SignUp)