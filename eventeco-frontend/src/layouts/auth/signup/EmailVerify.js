import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from '../../../services/operation/authApi';
import './EmailVerify.css'
import { toast } from 'react-toastify';

const EmailVerify = () => {
  const [otp, setOtp] = useState();
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (!signupData) {
      navigate('/signup');
    }
  });


  const signupHandler = (e) => {
    e.preventDefault();
    if (otp === undefined) {
      return toast.error("Fill The OTP")
    }
    const { firstName, lastName, email, password, confirmPassword, } = signupData;
    dispatch(
      signUp(firstName, lastName, email, password, confirmPassword, otp, navigate)
    )

  };
  return (
    <div className='verifyWrapper'>
      <div className='verifyMain'>
        <h1>Verify Email</h1>
        <form onSubmit={signupHandler} className='verifyForm' >
          <p className='verifyPara'>A verification code has been sent to you. Enter the code below</p>
          <OtpInput
            className="otpContainer_22"
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className='separateSpan'></span>}
            renderInput={(props) => <input {...props} className='inputAtOTP_22' />}
          />
          <div className='verifyButton'>
            <div className='emailVerifyBtn'>
              <button type="submit" className='verifyBtn'>
                Verify Email
              </button>
            </div>
            <div className='backToSignUp'>
              <Link to="/signup" className='back'>
                Back To Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmailVerify