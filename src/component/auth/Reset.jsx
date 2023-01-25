import React from 'react'
import ResetImg from '../../assets/forgot.svg'
import {AiOutlineClose} from 'react-icons/ai'

const Reset = ({onLogin}) => {
  return (
    <div className='main-container --flex-center'>
      <div className="form-container reset">
        <form className='--form-control'>
          <h2 className='--color-danger --text-center'>Rest Password</h2>
          <input type="email" className='--width-100' placeholder='Email' />
          <button className='--btn --btn-primary --btn-block'>Rest Password</button>
          <span className='--text-sm --block --text-center'>
             We will send you a reset link!!!
          </span>
          <div className="close" onClick={onLogin}>
              <AiOutlineClose color='red' />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={ResetImg} alt="register" />
      </div>
    </div>
  )
}

export default Reset
