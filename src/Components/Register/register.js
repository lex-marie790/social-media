import React, { useState } from 'react'


function Register(props) {
    
    const [registerUser, setRegisterUser] = useState(initialState)
    return(
        <div className='register'>
            <h1>Register</h1>
            <form>
                <label>
                    <input
                        className='input'
                        type='text'
                        name='fullName'
                        value='fullName'
                        placeholder='Full Name'
                        required
                    />
                </label>

                <label>
                    <input 
                        className='input'
                        type='email'
                        name='email'
                        value='email'
                        placeholder='Email Address'
                        required
                    />
                </label>

                <label>
                    <input 
                        className='input'
                        type='password'
                        name='password'
                        value='password'
                        placeholder='Password'
                        required
                    />
                </label>

                <label>
                    <input 
                        className='input'
                        type='password'
                        name='password'
                        value='password'
                        placeholder='Confirm Password'
                        required
                    />
                </label>

                <div className='agree'>
                    <input 
                        type='checkbox'
                    /> I agree to Terms of Service
                </div>

                <div className='submit'>
                    <input 
                        type='submit'
                        value='Register'
                    />
                </div>
            </form>
        </div>
    )
}

export default Register;
