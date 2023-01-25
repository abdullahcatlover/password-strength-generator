import { useState, useEffect} from 'react'
import RegisterImg from '../../assets/register.webp'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa'

const Register = ({ onLogin, onShowPassword, onTogglePassword}) => {
   
    const [showIndicator, setShowIndicator] = useState(false)
    const [pass, setPass] = useState('')

    const [PassChar, setPassChar] = useState(false)
    const [passLetter, setPassLetter] = useState(false)
    const [passwordNumber, setPasswordNumber] = useState(false)
    const [passLength, setPassLength] = useState(false)
    const [passComplete, setPassComplete] = useState(false)

    
    const handleShowIndicator =()=> {
        setShowIndicator(true)
    }
    
    const handlePasswordChange =(e)=> {
        setPass(e.target.value)
        console.log(pass);
    }

    useEffect(()=> {
        // check lower and uppercase
        if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
            setPassLetter(true)
        }else {
            setPassLetter(false)
        }

        //check for NUmbers
        if(pass.match(/([0-9])/)){
            setPasswordNumber(true)
        }else {
            setPasswordNumber(false)
        }
        //check for special character
        if(pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
           setPassChar(true)
        }else{ 
        setPassChar(false)
        }

        if(pass.length > 7){
          setPassLength(true)
        }else(
            setPassLength(false)
        )

        //enable & disable button
        if(passLetter && passwordNumber && PassChar && passLength){
           setPassComplete(true)
        }else{
           setPassComplete(false)
        }
    }, [pass, passLetter, passwordNumber, PassChar, passLength])

    return (
        <div className='main-container --flex-center'>
            <div className="form-container">
                <form className='--form-control'>
                    <h2 className='--color-danger --text-center'>Register</h2>
                    <input type="text"
                    className='--width-100'
                     placeholder='UserName'
                    
                     />
                    <input type="email"
                     className='--width-100'
                     placeholder='Email'
                    
                     />
                    {/* -------------------------password field start----------------------- */}
                    <div className="password">
                        <input type={onShowPassword ? 'text' : 'password'}
                            className='--width-100'
                            placeholder='Password'
                            onFocus={handleShowIndicator}
                            value={pass}
                            onChange={handlePasswordChange}
                        />
                        <span className='icon'
                            onClick={onTogglePassword}>
                            {onShowPassword ? <AiOutlineEyeInvisible size={20} color='orangered' /> : <AiOutlineEye size={20} />}
                        </span>

                    </div>
                    {/* -----------------------password field end-------------------------------*/}
                    <button onClick={()=> alert(pass)} 
                     disabled={!passComplete}
                     className={passComplete ? 
                     '--btn --btn-primary --btn-block'
                     : '--btn --btn-primary --btn-block btn-disabled'}>Login</button>
                    <span className='--text-sm --block'>
                        Do you have an account?
                        <a href="#" className='--text-sm' onClick={onLogin}>Login</a>
                    </span>
                    {/* ----------------------password strength indicator start-------------------- */}
                    <div className={showIndicator ? 'show-indicator': 'hide-indicator'}>
                        <ul className='--card --bg-grey --text-sm --p'>
                            <p className='--text-sm'>password strength indicator</p>
                            <li className={passLetter ? 'pass-green' : 'pass-red'}>
                                <span className='--align-center'>
                                    {passLetter ?  <FaCheck /> : <GoPrimitiveDot /> }
                                    &nbsp; Lowercase & Uppercase
                                </span>
                            </li>
                            <li className={passwordNumber ? 'pass-green' : 'pass-red'}>
                                <span className='--align-center'>
                                    {passwordNumber ? <FaCheck /> :  <GoPrimitiveDot />}
                                    &nbsp; Numbers (0-9)
                                </span>
                            </li>
                            <li className={PassChar ? 'pass-green' : 'pass-red'}>
                                <span className='--align-center'>
                                {PassChar ? <FaCheck /> :  <GoPrimitiveDot />}
                                    &nbsp; Special Character (!@#$%^&*)
                                </span>
                            </li>
                            <li className={passLength ? 'pass-green' : 'pass-red'}>
                                <span className='--align-center'>
                                {passLength ? <FaCheck /> :  <GoPrimitiveDot />}
                                    &nbsp; At least 8 Character
                                </span>
                            </li>
                        </ul>
                    </div>


                    {/* ----------------------password strength end-------------------- */}
                </form>
            </div>
            <div className="img-container">
                <img src={RegisterImg} alt="register" />
            </div>
        </div>
    )
}

export default Register