import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
import { selectIsInLoading } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

import './sign-in.styles.scss'

class SignIn extends React.Component {

    constructor() {
        super()
        this.state = { email: '', password: '', loader: false }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.state
        const { emailSignInStart } = this.props
        this.setState({loader: true})
        
        emailSignInStart({email, password})
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {

        const { googleSignInStart, isInLoading } = this.props

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='Email' type='email' name='email' value={this.state.email} required />
                    <FormInput handleChange={this.handleChange} label='Password' type='password' name='password' value={this.state.password} required />
                    <div className='buttons'>
                        {
                            
                            isInLoading ? <div className='loader'></div> :
                            (<>
                            <CustomButton type='submit'>Submit Form</CustomButton>
                            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                            </>)
                        }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isInLoading: selectIsInLoading
})

export default connect(mapStateToProps, {googleSignInStart, emailSignInStart})(SignIn)