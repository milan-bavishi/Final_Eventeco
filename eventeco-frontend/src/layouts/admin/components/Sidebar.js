import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CloseBtn from './CloseBtn';
import "./Sidebar.css"
import logo from "../../../Assets/Images/logo (1).png"


function Sidebar({ toggleHandlerr }) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const linkItems = [
  
    { text: 'Register Event', path: '/dashboard/registerevent' },
    { text: 'Add Person', path: '/dashboard/addperson' },
    { text: 'Resgistration Data', path: '/dashboard/resgistrationdata' },
    { text: 'Add Authorities', path: '/dashboard/addauthorities' },
    { text: 'Authorities data', path: '/dashboard/Authoritiesdata' },
    { text: 'Check ticket', path: '/dashboard/checktickets' },
  ];
  const handleLinkItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="dashSideContainer">
      <div className='dashSideLogo'>
        <div>
          <img src={logo} />
        </div>
        <button onClick={() => toggleHandlerr()} className='toggle-btn'>
          <CloseBtn />
        </button>
      </div>
      <hr className='hrline' />
      <ul className="link-items">
        {linkItems.map((item, index) => (
          <li
            key={index}
            className={`link-item ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => handleLinkItemClick(index)}
          >
            <NavLink to={item.path} className="link">
              <span>
                {item.text}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Sidebar;