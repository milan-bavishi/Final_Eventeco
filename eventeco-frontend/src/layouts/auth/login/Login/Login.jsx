import React, { useState } from 'react'
import './login.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../../../services/operation/authApi'
import photo1 from "./images/photo1.jpg"
import photo2 from "./images/photo2.jpg"
import photo3 from "./images/photo3.jpg"
import photo4 from "./images/photo4.jpg"
import photo5 from "./images/photo5.jpg"
import photo6 from "./images/photo6.jpg"
import photo7 from "./images/photo7.jpg"
import photo8 from "./images/photo8.avif"
import photo9 from "./images/photo9.avif"
import photo10 from "./images/photo10.jpg"
import photo11 from "./images/photo11.jpg"
import photo12 from "./images/photo12.jpg"
import photo13 from "./images/photo13.jpg"
import photo14 from "./images/photo14.jpg"
import photo15 from "./images/photo15.jpg"
import photo16 from "./images/photo16.jpg"
import photo17 from "./images/photo17.jpg"
import photo19 from "./images/photo19.png"


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const { email, password } = formData


  function handleOnChange(e) {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    console.log(formData)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div className='loginWrapper'>
      <div className='slider'>
        {/* <img src={photo1} /> */}
        <Swiper navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className='logSwiper'>
          <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo6} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo7} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo8} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo9} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo10} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo11} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo12} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo13} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo14} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo15} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo16} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo17} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo19} alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <div className='logDetails'>
        <div className='logDet'>
          <div className="welcome">
            <h1>Welcome Back!</h1>
          </div>
          <div className='loginDetails'>
            <div className='logHeading'>
              <h2>Login</h2>
              <p>Please enter your details.</p>
            </div>
            <div className='formSection'>
              <form onSubmit={handleOnSubmit} className='logForm'>
                <div className='formInput'>
                  <input type="email"
                    required
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleOnChange}
                  />
                  <input type="password"
                    required
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleOnChange}
                  />
                </div>
                <div className='logBtn'>
                  <button type="submit">
                    Login
                  </button>
                </div>
                <div className='authLoginLink'>
                  <Link to='/authlogin' className='link'>
                    For Authorities Login 
                  </Link>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className='account'>
          <p>Don't have an account?</p>
          <Link to='/signup' className='link'>
            SignUp
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login  