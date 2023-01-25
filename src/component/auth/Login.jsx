import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import loginImg from '../../assets/login.svg'

const Login = ({ onRegister, onReset, onTogglePassword, onShowPassword }) => {
  return (
    <div className='main-container --flex-center'>
      <div className="img-container">
        <img src={loginImg} alt="login" />
      </div>
      <div className="form-container">
        <form className='--form-control'>
          <h2 className='--color-danger --text-center'>Login</h2>
          <input type="text" className='--width-100' placeholder='UserName' />
          <div className="password">
            <input type={onShowPassword ? 'text' : 'password'}
            className='--width-100' 
            placeholder='Password' />
            <span className='icon'
              onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible size={20} color='orangered' /> : <AiOutlineEye size={20} />}
            </span>
          </div>
          <button className='--btn --btn-primary --btn-block'>Login</button>
          <a href="#" className='--text-sm' onClick={onReset}>Forgot Password</a>
          <span className='--text-sm --block'>
            Don't have an account?
            <a href="#" className='--text-sm' onClick={onRegister}>Register</a>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
