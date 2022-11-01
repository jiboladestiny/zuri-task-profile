import React from 'react'
import profileimage from '../asset/image/profile__img.svg'
import redirect from '../asset/image/_Avatar share button.svg'
const Profiledetail = () => {
  return (
    <div className="profile_detail">
      <img src={redirect} alt="" />

      <img src={profileimage} alt="" />
      <p className="mt-2">Janet Jackson</p>
    </div>
  );
}

export default Profiledetail
