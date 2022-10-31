import React from 'react'
import slack from '../asset/image/icons8-slack-new.svg'
import github from '../asset/image/icons8-github.svg'
const Socialicons = () => {
  return (
    <div className="sociallink d-flex justify-content-center mt-5 mb-5">
      <div className='d-flex align-items-center'>
        <img className='me-1' src={slack} alt="" width="30" height="30"/>
        <img src={github} alt="" />
      </div>
    </div>
  );
}

export default Socialicons
