import React, {useState} from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'

const Auth = () => {

    const [isSignup, setIsSignup]= useState(false)

    const handleSwitch = () => {

        setIsSignup(!isSignup)

    }
  return (
    <section class='auth-section'>
        { isSignup && <AboutAuth/>}
        <div class='auth-container-2'>
            {!isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
            <form>
                {
                    isSignup &&(
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type='text' id='name' name='name'/>
                        </label>
                    )
                }
                <label htmlFor='email'>
                    <h4 style={{alignItems:"right"}}>Email</h4>
                    <input type='email' name='email' id='email' />
                </label>
                <label htmlFor='password'>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <h4>Password</h4>
                        {!isSignup && <p style={{color:"#007ac6", fontSize:"13px"}}>Forgot Password?</p>}
                    </div>
                    <input type='password' name='password' id='password' />
                    {isSignup && <p style={{color:"#666767", fontSize:"13px"}}>Password must contain atleast eight charachters, including<br/> atleast 1 letter and 1 number.</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                            <input type='checkbox' id='check' style={{height:'18px', width:'18px', marginRight:'10px', marginLeft:'10px'}} />
                            <p style={{fontSize:"13px", color:'black'}}>
                                Opt-in to receive occasional, product updates, user<br/> research invitations , company announcements,<br/> and digests.
                            </p>
                        </label>
                    )
                }
                <button type='submit' className='auth-btn'>{ !isSignup ? 'Login' : 'SignUp'}</button>
                {
                    isSignup && (
                        <p style={{color:"#666767", fontSize:"13px"}}>
                            By clicking "Sign up", you agree to our 
                            <span style = {{color: "#007ac6"}}> terms of services</span>, 
                            <span style = {{color: "#007ac6"}}><br/>privacy policy </span> and
                             <span style = {{color: "#007ac6"}}> cookie policy</span>
                        </p>
                    )
                }
            </form>
            <p>
                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                    <button
                        type="button"
                        className="handle-switch-btn"
                        onClick={handleSwitch}
                    >
                        {isSignup ? "Log in" : "Sign up"}
                    </button>
                </p>
        </div>
    </section>
    )
}

export default Auth