import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./Authoritiesdata.css"
import Data from './Data.json';
import { authallData } from '../../../../services/event/registration'

function Authoritiesdata() {

  const [loading, setLoading] = useState(false);
  const [allData, setallData] = useState([]);
  const { email } = useSelector((state) => state.profile.user);
  const [data, setData] = useState(Data);
  const [records, setRecords] = useState(data);

  useEffect(() => {
    authallData(setallData, setData, setRecords,setLoading, email);
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
    <div className='authdWrapper'>
      <div className='authdCard'>
        <nav className='authTopNav'>
          <div className='authTopNavLeftSection'>
            <h6>No. Registration</h6>
            <div className='authTotalReg'>
              {Data.length}
            </div>
          </div>
          <div className='authTopNavRightSection'>
            <div>
              <input type="text" placeholder='Search' className='authTopNavInput' onChange={filterName} />
            </div>
            <button className='authTopNavDDBtn' onMouseEnter={() => setOpenFDD(true)} onMouseLeave={() => setOpenFDD(false)}>
              <div>
                {sortBy}
              </div>
              {
                openFDD && (
                  <div className='authTopNavDD'>
                    <button className='authTopNavDDItem' onClick={() => setSortByValue('Filter')}>
                      Remove
                    </button>
                    <button className='authTopNavDDItem' onMouseEnter={() => setOpenFFDD(true)} onMouseLeave={() => setOpenFFDD(false)}>
                      <div>
                        Gender
                      </div>
                      {
                        openFFDD && (
                          <div className="authTopNavCDD">
                            <button className="authTopNavCDDItem" onClick={() => setSortByValue('Male')}>
                              Male
                            </button>
                            <button className="authTopNavCDDItem" onClick={() => setSortByValue('Female')}>
                              Female
                            </button>
                            <button className="authTopNavCDDItem" onClick={() => setSortByValue('Other')}>
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
            <button className='authTopNavBtn'>Export as CSV</button>
            <button className='authTopNavDDBtn' onMouseEnter={() => setOpenSDD(true)} onMouseLeave={() => setOpenSDD(false)}>
              <div>
                {recordsPerPage}
              </div>
              {
                openSDD && (
                  <div className='authTopNavDD'>
                    <button className='authTopNavDDItem' onClick={() => changeRecords(10)}>
                      10
                    </button>
                    <button className='authTopNavDDItem' onClick={() => changeRecords('15')}>
                      15
                    </button>
                  </div>
                )
              }
            </button>
          </div>
        </nav>
        <section classNzame='authDetailsSection'>
          <table className='authTable'>
            <thead>
              <th className='authTableTh' id='authTableTdId'>Eventname</th>
              <th className='authTableTh' id='authTableTdName'>Location</th>
              <th className='authTableTh' id='authTableTdEmail'>ID</th>
              <th className='authTableTh' id='authTableTdPhone'>Password No.</th>
              <th className='authTableTh' id='authTableTdPhone'>Designation</th>
            </thead>
            <tbody>
              {recordsDisp.map((d, i) => (
                <tr key={i} className='authTableTr'>
                  <td className='authTableTd' id='authTableTdId'>{d.eventname}</td>
                  <td className='authTableTd' id='authTableTdName'>{d.location}</td>
                  <td className='authTableTd' id='authTableTdName'>{d.id}</td>
                  <td className='authTableTd' id='authTableTdEmail'>{d.password}</td>
                  <td className='authTableTd' id='authTableTdPhone'>{d.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <nav className='authBotNav'>
          <div className='authBotNavLeftSec'>
            <p>Page <span>{currentPage} / {numbers.length}</span></p>
          </div>
          <div className='authBotNavRightSec'>
            <div className='authBotNavPageItem'>
              <a href="#" className='authBotNavPageLink' onClick={prevPage}>Prev</a>
            </div>
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handleInputChange(Number(e.target.value))}
              id='authBotNavInput'
            />
            <div className='authBotNavPageItem'>
              <a href="#" className='authBotNavPageLink' onClick={nextPage}>Next</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Authoritiesdata