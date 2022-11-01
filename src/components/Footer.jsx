import React from 'react'
import intership from '../asset/image/Zuri.Internship_Logo.svg'
import ingressive from '../asset/image/I4G.svg'
const Footer = () => {
  return (
    <div>
      <hr />
      <div className="d-md-flex footer justify-content-md-between">
        <img src={intership} alt="" />
        <div className="footeritem">
          <span>HNG Internship 9 Frontend Task</span>
        </div>
        <img src={ingressive} alt="" />
      </div>
    </div>
  );
}

export default Footer
