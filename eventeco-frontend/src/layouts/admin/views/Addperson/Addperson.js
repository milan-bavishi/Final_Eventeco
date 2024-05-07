import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, findallData } from '../../../../services/event/registration';
import "./Addperson.css"

function Addperson() {


  const { email } = useSelector((state) => state.profile.user);
  const [allData, setallData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    findallData(setallData, setLoading, email);
  }, []);



  const onSubmit = (e) => {
    e.preventDefault();
    const eventname = document.getElementById("eventname").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const personemail = document.getElementById("personemail").value;
    const designation = document.getElementById("designation").value;
    console.log(eventname, firstname, lastname, phonenumber, gender, personemail, designation, email);
    dispatch(registerUser(eventname, firstname, lastname, phonenumber, gender, personemail, designation, email));
    navigate('/dashboard/Addperson');
    document.getElementById("eventname").value = 'NA';
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("phonenumber").value = '';
    document.getElementById("personemail").value = '';
    document.getElementById("designation").value = '';
  }

  return (
    <div className='personWrapper'>
      <div className='personCard'>
        <div className='pCardHeading'>
          <h1>Enter details...</h1>
        </div>
        <form action="" onSubmit={onSubmit}>
          <div className='pCardForm'>
            <div>
              <div className='pFormInput'>
                <label htmlFor="">Event Name</label>
                <select name="" id="eventname">
                  {
                    allData.length == 0 ? (<><option value="NA"> No Event Found  </option> </>) : (<>
                      {
                        allData.map((val, index) => <option value={`${val.eventName}`}>{val.eventName}</option>)
                      }
                    </>)
                  }  //drop down data of event .
                </select>
              </div>
            </div>
            <div className='pFormfs'>
              <div className='pFormInput'>
                <label htmlFor="">First Name</label>
                <input type="text"
                  required
                  id="firstname"
                />
              </div>
              <div className='pFormInput'>
                <label htmlFor="">Last Name</label>
                <input type="text"
                  required
                  id="lastname" />
              </div>
            </div>
            <div className='pFormss'>
              <div className='pFormInput'>
                <label htmlFor="">Phone Number</label>
                <input type="tel" minLength={10} maxLength={10}
                  required
                  id="phonenumber" />
              </div>
              <div className='pFormInputRadio'>
                <label htmlFor="">Gender</label>
                <div className='pFormRadio'>
                  <input type="radio" id='male' name='pFormradio' value="Male" onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="male">Male</label>
                  <input type="radio" id='female' name='pFormradio' value="Female" onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="female">Female</label>
                  <input type="radio" id='others' name='pFormradio' value="Other" onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="others">Other</label>
                </div>
              </div>
            </div>
            <div className='pFormts'>
              <div className='pFormInput'>
                <label htmlFor="">Email</label>
                <input type="text"
                  required
                  id="personemail" />
              </div>
              <div className='pFormInput'>
                <label htmlFor="">Designation</label>
                <input type="text"
                  required
                  id="designation" />
              </div>
            </div>
            <div className='pFormFs'>
              <div className='pFormBtn'>
                <button type='submit'>Add</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Addperson

