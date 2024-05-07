import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authlogin } from "../../../services/operation/authApi"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'
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
function Authlogin() {

  const dispacth = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value
    console.log(id, password);
    dispacth(authlogin(id, password, navigate));
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
            <h1>Welcome Authority!</h1>
          </div>
          <div className='loginDetails'>
            <div className='logHeading'>
              <p>Please enter your details.</p>
            </div>
            <div className='formSection'>
              <form className='logForm' onSubmit={onSubmit}>
                <div className='formInput'>
                  <input type="id"
                    required
                    placeholder='id'
                    name='email'
                    id='id'
                  />
                  <input type="password"
                    required
                    placeholder='Password'
                    name='password'
                    id='password'
                  />
                </div>
                <div className='logBtn'>
                  <button type="submit">
                    Login
                  </button>
                </div>
                <div className='authLoginLink'>
                  <Link to='/login' className='link'>
                    For Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authlogin