import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Aos from "aos";
import 'aos/dist/aos.css'
import eventlogofooter from "./icon/eventEcofooter.png";
import eventeco from "./icon/eventeco.png";
import logo from "./icon/logo-nav-qr.png";
import hero from "./icon/hero-image.svg";
import image from "./icon/image.png";
import image2 from "./icon/image2.png";
import image3 from "./icon/image3.png";
import Ellipse1 from "./icon/Ellipse1.svg";
import Ellipse2 from "./icon/Ellipse2.svg";
import Ellipse3 from "./icon/Ellipse3.svg";
import Vector from "./icon/Vector.svg";
import yellowVector from "./icon/yellow-vector.svg";
import connectGraphic from "./icon/connect-graphic.svg";
import connectMail from "./icon/connect-mail.svg";
import github from "./icon/github.svg";
import instagram from "./icon/instagram.svg";
import linkedin from "./icon/linkedin.svg";
import location from "./icon/location.svg";
import mail from "./icon/mail.svg";
import mailSubscribe from "./icon/mail-subscribe.svg";
import number from "./icon/number.svg";
import reviewElemant from "./icon/review-elemant.svg";
import reviewEllipse1 from "./icon/review-ellipse-1.svg";
import reviewEllipse2 from "./icon/review-ellipse-2.svg";
import reviewEllipse3 from "./icon/review-ellipse-3.svg";
import reviewEllipse4 from "./icon/review-ellipse--4.svg";
import reviewQutos from "./icon/review-qutos.svg";
import subscribe from "./icon/subscribe.svg";
import teamSemicir from "./icon/team-semi-cir.svg";
import Vector1 from "./icon/Vector-1.svg";
import Vector2 from "./icon/Vector-2.svg";
import whyusEle1 from "./icon/whyus-ele-1.svg";
import whyusEle2 from "./icon/whyus-ele-2.svg";
import graphic from "./icon/graphic.svg";
import rectangle from "./icon/Rectangle.png";
import footerLocation from "./icon/footeLocation.png";
import footerNumber from "./icon/footerNumber.png";
import footerMail from "./icon/footerMail.png";
import Login from "../auth/login/Login/Login"
import Signup from "../auth/signup/Signup";
import photo1 from './icon/photo1.png'
import photo2 from './icon/photo2.png'
import photo3 from './icon/photo3.png'
import qutos from './icon/qutos.png'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addhomeData, addhomeMail } from "../../services/event/registration"

import desai from "./icon/review/desai.jpg"
import amiras from "./icon/review/amiras.jpg"
import bhargav from "./icon/review/bhargav.jpg"
import nishant from "./icon/review/nishant.jpg"
import yash from "./icon/review/yash.jpg"
import ishwar from "./icon/review/ishwar.jpg"

function App() {

  Aos.init({
    duration: 1200,
    offset: 100
  })

  const dispacth = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const massage = document.getElementById("massage").value;
    console.log(name, email, subject, massage);
    dispacth(addhomeData(name, email, subject, massage, navigate));
    navigate('/');
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("massage").value = '';
  }

  const onSubmit1 = (e) => {
    e.preventDefault();
    const subInput = document.getElementById("subInput").value;
    dispacth(addhomeMail(subInput, navigate));
    navigate('/');
    document.getElementById("subInput").value = '';

  }

  return (
    <>
      <div className="homeWrapper" id="home">
        {/* Header */}
        <header>
          {/* NavBar */}
          <nav className="homeNav" data-aos='slide-down'>
            {/* Logo */}
            <div className="event">
              <img src={eventeco} alt="" id="eventechoLogo" />
            </div>
            {/* Component */}
            <div className="components">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#whyus">Why US</a>
                </li>
                <li>
                  <a href="#review">Review</a>
                </li>
                <li>
                  <a href="#connectUs">Contact Us</a>
                </li>

              </ul>
            </div>
            {/* Button */}
            <div className="button">
              <Link to="/login">
                <button>Create Event</button>
              </Link>
            </div>
          </nav>
        </header>
        <main>
          {/* Hero Section */}
          <section className="hero">
            <div className="desc" >
              <div>
                <h1>Your Event, Safety Ours!</h1>
                <h2>Safe Event No Stress</h2>
              </div>
              <div>
                {/* <button>Create Our Event </button> */}
                <Link to="/login" className="link">
                  <button>Create Our Event </button>
                </Link>
              </div>
            </div>
            <div className="content">
              <div>
                <h1 data-aos='slide-right'>Certainly! Here's a list of event types:
                </h1>
                <p data-aos='slide-left'>
                  Conference, Music Event, Sports Event, Exhibition/Trade Show, Networking Event, Wedding, Cultural Event, Educational Event
                  , Trade Conference/Expo, Tech Event, Fashion Show, Food and Beverage Event
                  , Health and Wellness Event
                  , Product Launch, Virtual/Hybrid Event
                  ,Holiday Event ,Government/Political Event
                </p>
              </div>
            </div>
            <img src={Ellipse3} id="ellipse3" loading="lazy" />
            <img src={Ellipse1} id="ellipse1" loading="lazy" />
            <img src={Ellipse2} id="ellipse2" loading="lazy" />
            <img src={image} id="image" />

            <img src={image3} id="image3" />
            <img src={hero} id="hero" data-aos='zoom-in' />
            <img src={yellowVector} id="yellowVector" />
            <img src={Vector} id="vector" />
          </section>

          {/* Why us */}
          <section className="whyUs" id="whyus" data-aos="filp-right">
            <div className="dots">
              <img src={whyusEle1} id="dot1" />
              <h1 data-aos='zoom-out'>Why Us</h1>
              <img src={whyusEle2} id="dot2" />
            </div>
            <div className="cards" data-aos='zoom-in'>
              <img src={Vector1} id="vector1" />
              <img src={Vector2} id="vector2" />

              <div className="cardMain">
                <div className="first">
                  <div className="card">Reliable Support</div>
                  <div className="card">Scalability</div>
                </div>

                <div className="second">
                  <div className="card">Innovative Technology</div>
                  <div className="card">Ease to Integration</div>
                  <div className="card">Continuous Innovation</div>
                </div>

                <div className="third">
                  <div className="card">Expert Team</div>
                  <div className="card">Key Features</div>
                </div>
              </div>
            </div>
          </section>

          {/* Review */}

          <div className="review" id="review">
            <img src={reviewEllipse1} id="review1" />
            <img src={reviewEllipse1} id="review2" />
            <img src={reviewEllipse3} id="review3" />
            <img src={reviewEllipse4} id="review4" />
            <h1 data-aos='fade-up'>Hear From Our Happy Clients</h1>
          </div>

          {/* Slider */}

          <section className="homeSlider" data-aos="fade-down">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              pagination={{ dynamicBullets: true }}
              className="swipe"
            >
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"Amazing platform! Made our event a breeze with its simplicity and security. Attendees loved the  code tickets. Highly recommend!"</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={desai} alt="" id="reviewphoto" />
                    </div>
                    <div className='person'>
                      <p>Hetvi Desai</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"Absolutely impressed with EventEco! It was the backbone of our conference, allowing us to manage everything seamlessly. Will definitely use again!"</p>                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={nishant} id="reviewphoto" alt="" />
                    </div>
                    <div className='person'>
                      <p>Nishant Kathrotiya</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"The customization options on EventEco were a game-changer for our music festival. It gave us the flexibility we needed to make our event truly unique."</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={yash} id="reviewphoto" alt="" />
                    </div>
                    <div className='person'>
                      <p>Yash Parmar</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"As a wedding planner, I rely on EventEco for all my events. It's a lifesaver with its intuitive interface and robust features."</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={bhargav} id="reviewphoto" alt="" />
                    </div>
                    <div className='person'>
                      <p>Bharrav Dungrani</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"Efficient, intuitive, and the customer support team at EventEco is top-notch. They were there every step of the way"</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={amiras} alt="" id="reviewphoto" />
                    </div>
                    <div className='person'>
                      <p>Amiras Mandaliya</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"Best event management system out there! EventEco made our charity fundraiser a huge success. Couldn't have asked for better support"</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={ishwar} id="reviewphoto" alt="" />
                    </div>
                    <div className='person'>
                      <p>Ishwar Goswami</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          {/* Connect US */}

          <section className="connectUs" id="connectUs" >
            <div className="title">
              <h1 data-aos='flip-up'>Connect Us</h1>
              <h4 data-aos='flip-down'>We are here for you! How can we help?</h4>
            </div>
            <div className="details">
              <div className="location" data-aos='slide-right'>
                <div>
                  <img src={graphic} alt="" />
                </div>
                <div className="loc">
                  <div className="flex">
                    <img src={location} alt="" />
                    <p>Surat</p>
                  </div>
                  <div className="flex">
                    <img src={number} alt="" />
                    <p>+91 9099129982</p>
                  </div>
                  <div className="flex">
                    <img src={connectMail} alt="" />
                    <p>info@eventeco.online</p>
                  </div>
                </div>
              </div>
              <div data-aos='slide-left'>
                <form action="" onSubmit={onSubmit} className="form">
                  <input type="text"
                    placeholder="Name"
                    required
                    id="name"
                  />
                  <input type="text"
                    placeholder="Email"
                    required
                    id="email" />
                  <input type="text"
                    placeholder="Subject"
                    required
                    id="subject" />
                  <textarea
                    name=""
                    id="massage"
                    cols="30"
                    rows="10"
                    placeholder="Go ahead, We are listening..."
                  ></textarea>
                  <button>submit</button>
                </form>
              </div>
            </div>
          </section>

          {/* Subscribe */}
          <form action="" onSubmit={onSubmit1}>
            <section className="subscribe">
              <img src={subscribe} id="subImg" data-aos='zoom-out' />
              <div className="content">
                <h1 data-aos='fade-down'>Subscribe For More Info</h1>
                <div className="subInput" data-aos='fade-up'>
                  <div className="subEmail">
                    <img src={mailSubscribe} id="mailSub" />
                    <input
                      type="text"
                      id="subInput"
                      placeholder="Your email here"

                    />
                  </div>
                  <div className="subBtn">
                    <button>Subsribe Now</button>
                  </div>
                </div>
              </div>
            </section>
          </form>

          {/* Footer */}

          <section className="footer">
            <img src={rectangle} id="footImg" alt="rectangle" />
            <div className="footContent">
              <div className="getStarted">
                <h1 data-aos='zoom-in'>Ready to get started?</h1>
                <div>
                  <Link to="/login" className="link" data-aos='zoom-in'>
                    <button>Create Our Event </button>
                  </Link>
                </div>
              </div>
              <div className="footSec">
                <div className="leftSec">
                  <img src={eventlogofooter} id="eventFooter" height={75} data-aos='zoom-out' />
                </div>
                <div className="rightSec">
                  <div className="footNav" data-aos='slide-right'>
                    <p>
                      <a href="#home">Home</a>
                    </p>
                    <p>
                      <a href="#whyus">Why Us</a>
                    </p>
                    <p>
                      <a href="#review">Review</a>
                    </p>
                    <p>
                      <a href="#connectUs">Contact Us </a>
                    </p>
                  </div>
                  <div className="footLoc" data-aos='slide-left'>
                    <div className="locFlex">
                      <img src={footerLocation} alt="" />
                      <p>Surat</p>
                    </div>
                    <div className="locFlex">
                      <img src={footerNumber} alt="" />
                      <p>+91 9099129982</p>
                    </div>
                    <div className="locFlex">
                      <img src={footerMail} alt="" />
                      <p>info@eventeco.online</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rights">
                <h1>©2024 EventEco. All Rights Reserved.</h1>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
