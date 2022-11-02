import React from 'react'
import profileimage from '../asset/image/newjibola.jpg'
import redirect from '../asset/image/_Avatar share button.svg'
const Profiledetail = () => {
  return (
    <div className="profile_detail">
      <img className="redirect" src={redirect} alt="" />

      <img src={profileimage} className="profile-img" alt="" />
      <p className="mt-2" id="twitter">
        Dhestiny144
      </p>
      {/* <p className="mt-2" id="slack">
        Ige Ajibola
      </p> */}
    </div>
  );
}

export default Profiledetail
