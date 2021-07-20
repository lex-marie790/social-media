import React, { useState } from 'react'


function Register(props) {
    
    const [registerUser, setRegisterUser] = useState(
        {
            fullName:'',
            email:'',
            password:'',
        }
    )

    const { fullName, email, password } = registerUser

    function handleChange(e) {
        const {name, value} = e.target;
        setRegisterUser(registerUser => ({...registerUser,[name] : value}));
        // e.preventDefault();
        console.log({registerUser})
    }

    // const handleSubmitClick= (e) => {
    //     e.preventDefault();
    //     if(state.password === state.confirmPassword) {
    //         sendDetailsToServer()
    //     } else {
    //         props.showError('Passwords do not match');
    //     }
    // }
    
    return(
        <div className='register'>
            <h1>Register</h1>
            <form>
                <label>
                    <input
                        className='input'
                        type='text'
                        name='fullName'
                        value= {fullName}
                        placeholder='Full Name'
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    <input 
                        className='input'
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email Address'
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    <input 
                        className='input'
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    <input 
                        className='input'
                        type='password'
                        name='confirmPassword'
                        // value={password}
                        placeholder='Confirm Password'
                        onChange={handleChange}
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
                        // onClick={handleSubmitClick}
                    />
                </div>
            </form>
        </div>
    )
}

export default Register;
