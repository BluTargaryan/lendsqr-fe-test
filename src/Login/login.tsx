import { useState } from 'react'

import icon from '../assets/images/lendsqr-logo.svg'
import pablo from '../assets/images/pablo-sign-in.svg'
import './login.scss'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <section>
      <div className='logo-with-image'>
        <img src={icon} alt="logo" className='logo'/>
        <img src={pablo} alt="pablo" className='pablo'/>
      </div>

      <div className='form-container'>
        <div className='form-container-header'>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        
        <form>
          <div className='form-container-input'>
            <input type="text" placeholder='Email' />
            <div className='password-container'>
              <input type={showPassword ? "text" : "password"} placeholder='Password'/>
              <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "HIDE" : "SHOW"}</span>
            </div>
            
            <a href="#">Forgot password?</a>
          </div>
          
          <button type="submit">Log in</button>
        </form>
      </div>
     
    </section>
  )
}

export default LoginPage