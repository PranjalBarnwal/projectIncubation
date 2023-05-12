import React from 'react'
import "./App.css"
import image from "./assets/image.jpg"
import InputField from './components/InputField.js'
import InputField1 from './components/InputField1.js'

const App = () => {
  return (
    <div className="container-parent">
    <div className='container'>
      <div className='profile'> 
        <img src={image} alt="" />
        <p className="name">Amelly</p>
        <p className="info">amelly12@bbb.com</p>
      </div>
      <form action="">
      <div className='profile-settings'>
        <p className='profile-setting-head'>Profile Setings</p>
        <div className="name-details">
        <InputField1/>
        <InputField1/>
        </div>
        <InputField/>
        <InputField/>
        <InputField/>
        <InputField/>
        <InputField/>
        <InputField/>
        <div className="name-details">
        <InputField1/>
        <InputField1/>
        </div>
        <button className='save'>Save Profile</button>
      </div>
      <div className='additional-info'>
        <div className="additional-info-head">
        <p>Edit Experience</p>
        <button className='experience'>Experience</button>
        </div>
      <InputField/>
      <InputField/>
      
      </div>
      </form>
    </div>
    </div>
  )
}

export default App
