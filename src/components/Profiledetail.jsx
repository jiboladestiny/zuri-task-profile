import React from 'react'
import profileimage from '../asset/image/newjibola.jpg'
import redirect from '../asset/image/_Avatar share button.svg'
const Profiledetail = () => {
  return (
    <div className="profile_detail">
      <img className="redirect" src={redirect} alt="" />

      <img src={profileimage} className="profile-image" alt="" />
      <p className="mt-2">Janet Jackson</p>
    </div>
  );
}

export default Profiledetail
