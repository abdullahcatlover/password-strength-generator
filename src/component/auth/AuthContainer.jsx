import {useState} from 'react'
import Login from './Login'
import './AuthContainer.scss'
import Register from './Register'
import Reset from './Reset'




const AuthCountainer = () => {
  const [auth, setAuth] = useState({login: true, register: false, reset: false});
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
}
  
  const handleRegister =()=> {
    setAuth({reset: false, login: false, register: true})
     
  }

  const handleReset =()=> {
    setAuth({reset: true, login: false, register: false})
    
  }

  const handleBackOnLogin =()=> {
    setAuth({reset: false, login: true, register: false})
   
  }

  return (
    <section className='--flex-center --100vh --bg-grey'>
      <div className="container box">
        {auth.login && <Login onRegister={handleRegister}
         onReset={handleReset} 
         onShowPassword={showPassword} 
         onTogglePassword={handleTogglePassword}
         onLogin={handleBackOnLogin}
        /> }
        {auth.register && <Register onLogin={handleBackOnLogin} onShowPassword={showPassword} 
        onTogglePassword={handleTogglePassword}/> }
        {auth.reset && <Reset  onLogin={handleBackOnLogin}/>  }
      </div>
    </section>
  )
}

export default AuthCountainer