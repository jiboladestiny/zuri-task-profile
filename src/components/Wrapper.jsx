import React from 'react'
import Footer from './Footer'
import Profiledetail from './Profiledetail'
import Profilelink from './Profilelink'
import Socialicons from './Socialicons'

const Wrapper = () => {
  return (
    <div className='wrapper container'>
    
        <Profiledetail/>
        <Profilelink/>
        <Socialicons/>
        <Footer/>
    </div>
  )
}

export default Wrapper
