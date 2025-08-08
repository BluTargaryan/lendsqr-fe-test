import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import icon from '../assets/images/lendsqr-logo.svg'
import pablo from '../assets/images/pablo-sign-in.svg'
import './login.scss'

interface UserData {
  email: string;
  token: string;
  lastLogin: string;
}

const LoginPage = () => {
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');


const handleSubmit = (e:FormEvent)=>{
  e.preventDefault();
  setError('');

  if (!email || !password) {
    setError('Please fill in all fields');
    return;
  }

  const userData: UserData = {
    email,
    token: 'demo-token-' + Date.now(),
    lastLogin: new Date().toISOString()
  };

  localStorage.setItem('user', JSON.stringify(userData));
  navigate('/dashboard');
}





  return (
    <section className="login-section">
      <div className='logo-with-image'>
        <img src={icon} alt="logo" className='logo'/>
        <img src={pablo} alt="pablo" className='pablo'/>
      </div>

      <div className='form-container'>
        <div className='form-container-header'>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        
        <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
          <div className='form-container-input'>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className='password-container'>
              <input type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
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