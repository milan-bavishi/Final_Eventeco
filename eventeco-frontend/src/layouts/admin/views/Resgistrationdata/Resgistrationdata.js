import "./Resgistrationdata.css"
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Data from './Data.json';
import { resallData } from '../../../../services/event/registration'

function Resgistrationdata() {

  const [loading, setLoading] = useState(false);
  const [allData, setallData] = useState([]);
  const { email } = useSelector((state) => state.profile.user);
  const [data, setData] = useState(Data);
  const [records, setRecords] = useState(data);

  useEffect(() => {
    resallData(setallData, setData, setRecords,setLoading, email);
  }, []);



  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);




  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const recordsDisp = records.slice(firstIndex, lastIndex);
  const npage = Math.ceil(records.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);




  const [openFDD, setOpenFDD] = useState(false);
  const [openSDD, setOpenSDD] = useState(false);
  const [sortBy, setSortBy] = useState('Filter');
  const [openFFDD, setOpenFFDD] = useState(false);

  function setSortByValue(value) {
    if (value === 'Filter') {
      setRecords(data);
    } else {
      let dfilter = data.filter(f => f.gender.includes(value));
      if (dfilter.length === 0) {
        alert('No Data Found');
      } else {
        setRecords(dfilter);
      }
    }
    setSortBy(value);
  }

  function prevPage(event) {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      event.preventDefault();
      alert('This is First page');
    }
  }

  function nextPage(event) {
    if (currentPage < numbers.length) {
      setCurrentPage(currentPage + 1);
    } else {
      event.preventDefault();
      alert('This is Last page');
    }
  }

  function changeRecords(rpp) {
    setRecordsPerPage(rpp);
    changeCPage(Math.min(currentPage, Math.ceil((Data.length) / rpp)));
  }

  function changeCPage(value) {
    setCurrentPage(value);
  }

  function handleInputChange(value) {
    if (value < 1) {
      value = 1;
    }
    if (value > numbers.length) {
      value = numbers.length;
    }
    setCurrentPage(value);
  }

  const filterName = (event) => {
    setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }

  return (
    <div className='regWrapper'>
      <div className='regCard'>
        <nav className='regTopNav'>
          <div className='regTopNavLeftSection'>
            <h6>No. Registration</h6>
            <div className='regTotalReg'>
              {Data.length}
            </div>
          </div>
          <div className='regTopNavRightSection'>
            <div>
              <input type="text" placeholder='Search' className='regTopNavInput' onChange={filterName} />
            </div>
            <button className='regTopNavDDBtn' onMouseEnter={() => setOpenFDD(true)} onMouseLeave={() => setOpenFDD(false)}>
              <div>
                {sortBy}
              </div>
              {
                openFDD && (
                  <div className='regTopNavDD'>
                    <button className='regTopNavDDItem' onClick={() => setSortByValue('Filter')}>
                      Remove
                    </button>
                    <button className='regTopNavDDItem' onMouseEnter={() => setOpenFFDD(true)} onMouseLeave={() => setOpenFFDD(false)}>
                      <div>
                        Gender
                      </div>
                      {
                        openFFDD && (
                          <div className="regTopNavCDD">
                            <button className="regTopNavCDDItem" onClick={() => setSortByValue('Male')}>
                              Male
                            </button>
                            <button className="regTopNavCDDItem" onClick={() => setSortByValue('Female')}>
                              Female
                            </button>
                            <button className="regTopNavCDDItem" onClick={() => setSortByValue('Other')}>
                              Other
                            </button>
                          </div>
                        )
                      }
                    </button>
                  </div>
                )
              }
            </button>
            <button className='regTopNavBtn'>Export as CSV</button>
            <button className='regTopNavDDBtn' onMouseEnter={() => setOpenSDD(true)} onMouseLeave={() => setOpenSDD(false)}>
              <div>
                {recordsPerPage}
              </div>
              {
                openSDD && (
                  <div className='regTopNavDD'>
                    <button className='regTopNavDDItem' onClick={() => changeRecords(10)}>
                      10
                    </button>
                    <button className='regTopNavDDItem' onClick={() => changeRecords('15')}>
                      15
                    </button>
                  </div>
                )
              }
            </button>
          </div>
        </nav>
        <section classNzame='regDetailsSection'>
          <table className='regTable'>
            <thead>
              <th className='regTableTh' id='regTableTdId'>Trick Id.</th>
              <th className='regTableTh' id='regTableTdName'>Event Nam</th>
              <th className='regTableTh' id='regTableTdName'>Firstname</th>
              <th className='regTableTh' id='regTableTdName'>lastname</th>
              <th className='regTableTh' id='regTableTdEmail'>Email</th>
              <th className='regTableTh' id='regTableTdPhone'>Phone No.</th>
              <th className='regTableTh' id='regTableTdGender'>Gender</th>
              <th className='regTableTh' id='regTableTdDate'>Reg-Date</th>
              <th className='regTableTh' id='regTableTdDes'>Designations</th>
            </thead>
            <tbody>
              {recordsDisp.map((d, i) => (
                <tr key={i} className='regTableTr'>
                  <td className='regTableTd' id='regTableTdId'>{d.code}</td>
                  <td className='regTableTd' id='regTableTdName'>{d.eventname}</td>
                  <td className='regTableTd' id='regTableTdName'>{d.firstname}</td>
                  <td className='regTableTd' id='regTableTdName'>{d.lastname}</td>
                  <td className='regTableTd' id='regTableTdEmail'>{d.personemail}</td>
                  <td className='regTableTd' id='regTableTdPhone'>{d.phonenumber}</td>
                  <td className='regTableTd' id='regTableTdGender'>{d.gender}</td>
                  <td className='regTableTd' id='regTableTdTime'>{d.joinedAt}</td>
                  <td className='regTableTd' id='regTableTdDes'>{d.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <nav className='regBotNav'>
          <div className='regBotNavLeftSec'>
            <p>Page <span>{currentPage} / {numbers.length}</span></p>
          </div>
          <div className='regBotNavRightSec'>
            <div className='regBotNavPageItem'>
              <a href="#" className='regBotNavPageLink' onClick={prevPage}>Prev</a>
            </div>
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handleInputChange(Number(e.target.value))}
              id='regBotNavInput'
            />
            <div className='regBotNavPageItem'>
              <a href="#" className='regBotNavPageLink' onClick={nextPage}>Next</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Resgistrationdata