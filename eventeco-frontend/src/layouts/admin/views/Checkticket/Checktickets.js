import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkticket } from '../../../../services/event/registration'
import './Checkticket.css'

function Checktickets() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [codedata, setCodedata] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkticket(codedata));
    navigate('/dashboard/checktickets');
    setCodedata('');
  }

  const handleChange = (e) => {
    setCodedata(e.target.value);
  }

  return (
    <>
        <div className="checkWrapper">
            <div className="checkCard">
            <form onSubmit={onSubmit} className="checkForm">
                <div className="checkFS">
                    <input 
                      type="text"
                      id="codedata"
                      value={codedata}
                      onChange={handleChange}
                      placeholder="Enter Ticket ID"
                      required
                    />
                </div>
                <div className="checkSS">
                  <button type="submit" className="checkBtn">Enter</button>
                </div>
            </form>
            </div>
        </div>
    </>
  )
}

export default Checktickets;
