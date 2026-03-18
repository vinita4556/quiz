import React from 'react'
import { loginStyles } from '../assets/dummystyles'
import { Link } from 'react-router-dom'
import { ArrowLeft, LogIn } from 'lucide-react'

const Login = ({ onLogin = null }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className={loginStyles.pageContainer}>
      <div className={loginStyles.bubble1}></div>
      <div className={loginStyles.bubble2}></div> 

      <Link to="/" className={loginStyles.backButton}>
        <ArrowLeft className={loginStyles.backButtonIcon} />
        <span className={loginStyles.backButtonText}>
          Back to Home
        </span>
      </Link>

      <div className={loginStyles.formContainer}>
        <form className={loginStyles.form} noValidate>
          <div className={loginStyles.formWrapper}>
            <div className={loginStyles.animatedBorder}>
              <div className={loginStyles.formContent}>
                <h2 className={loginStyles.heading}>
                  <span className={loginStyles.headingIcon}>
                    <LogIn className={loginStyles.headingIconInner} />
                  </span>
                   <span className={loginStyles.headingText}>
                    Login
                   </span>
                </h2>

                <p className={loginStyles.subtitle}>
                    Sign in to continue to Hexagon Quiz. Light,clean UI - smooth 
                    mirco-animations and esay validations.
                </p>

                <label className={loginStyles.label}>
                  <span classname={loginStyles.labelText}>Email</span> 
                  <div className={loginStyles.inputContainer}>
                   <span className={loginStyles.inputIcon}>
                     <Mail className={loginStyles.inputIconInner}/>
                   </span>
                    <input type="email" name="email" />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login