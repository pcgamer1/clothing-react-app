import React from 'react'

import './master-user.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const MasterUser = () => (
    <div className='master-user'>
        <SignIn />
        <SignUp />
    </div>
)

export default MasterUser