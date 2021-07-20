
import React, {useState} from 'react'
import './login.css';
import { FaUser, FaLock } from 'react-icons/fa'

function Login(props) {

    const [user, setUser] = useState(
        {
            email:'',
            password:'',
        }
    )

    const { email, password } = user;
    
    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({...user,[name] : value}));
        e.preventDefault();
        console.log({user})
    }

    return(
        <div className='login'>
            <h1>Welcome Back</h1>
            <form>
                <label> 
                    <input
                        className='input' 
                        type='email' 
                        name='email' 
                        value={ email } 
                        placeholder='Email'
                        onChange={handleChange}
                        required
                    />
                    <i class="fa fa-envelope icon"></i>
                </label>
                
                <label>
                    <input 
                        className='input'
                        type='password' 
                        name='password' 
                        value={ password }
                        placeholder='Password'
                        onChange= {handleChange}
                        required
                    />
                    <i class="fa fa-key icon"></i>
                </label>
                <div className='remember'>
                    <input 
                        type='checkbox' 
                    /> Remember Me
                </div>
                
                <input 
                    type='submit' 
                    value='Login' 
                />
            </form>
        </div>
    )
}

export default Login;
