import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { registerAuthorities,findallData } from "../../../.././services/event/registration"
import "./Addauthorities.css"

function Addauthorities() {

  const {email} = useSelector((state)=>state.profile.user);
  const [allData, setallData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    findallData(setallData, setLoading,email);
  }, []);


  // After dispatching the action, clear the input values
const onSubmit = (e) => {
  e.preventDefault();
  const eventname = document.getElementById("eventName").value;
  const authId = document.getElementById("authId").value;
  const authLocation = document.getElementById("authLocation").value;
  const authPassword = document.getElementById("authPassword").value;
  const authDesignation = document.getElementById("authDesignation").value;
  
  console.log(eventname, authId, authLocation, authPassword, authDesignation, email);
  
  dispatch(registerAuthorities(eventname, authId, authLocation, authPassword, authDesignation, email));
  navigate('/dashboard/addauthorities');
  
  // Clear input values after submission
  document.getElementById("eventName").value = 'NA';
  document.getElementById("authId").value = '';
  document.getElementById("authLocation").value = '';
  document.getElementById("authPassword").value = '';
  document.getElementById("authDesignation").value = '';
}




    return (
      <div className='authWrapper'>
        <div className='authCard'>
          <div className='authCardHead'>
            <h1>Generate</h1>
          </div>
          <div className='authCardForm'>
            <form action=""  className='authForm' onSubmit={onSubmit}>
            <div className='pFormInput'>
          <label htmlFor="">Event Name</label>
              <select name="" id="eventName">
                {
                  allData.length==0?(<><option value="NA"> No Event Found  </option> </>):(<>
                  
                    {
                      allData.map((val,index)=><option value={`${val.eventName}`}>{val.eventName}</option> )
                    }
                  
                  </>)
                }  //drop down data of event .
              </select>
            </div>
              <div className='authFormfs'>
                <div className='authFormInput'>
                  <label htmlFor="">Id.</label>
                  <input type="text"
                    required
                    name='authId'
                    id='authId' />
                </div>
                <div className='authFormInput'>
                  <label htmlFor="">location</label>
                  <input type="text"
                    required
                    name='authLocation'
                    id='authLocation' />
                </div>
              </div>
              <div className='authFormss'>
                <div className='authFormInput'>
                  <label htmlFor="">Password</label>
                  <input type="text"
                    required
                    name='authPassword'
                    id='authPassword' />
                </div>
                <div className='authFormInput'>
                  <label htmlFor="">Designation</label>
                  <input type="text"
                    required
                    name='authDesignation'
                    id='authDesignation' />
                </div>
              </div>
              <div className='authFormts'>
                <div className='authFormBtn'>
                  <button type='submit'>Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  export default Addauthorities

