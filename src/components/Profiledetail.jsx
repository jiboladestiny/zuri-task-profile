import React from 'react'
import profileimage from '../asset/image/profile__img.svg'
const Profiledetail = () => {
  return (
    <div className='profile_detail'>
        <img src={profileimage} alt="" />
        <p className='mt-2'>Janet Jackson</p>
    </div>
  )
}

export default Profiledetail
