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
        <InputField1 head="name" placeholder="enter name" type="text"/>
        <InputField1 head="Surname" placeholder="surname" type="text"/>
       
        
        </div>
        <InputField head="PhoneNumber" placeholder="enter phone number" type="tel"/>
        <InputField head="Address" placeholder="enter address" type="text"/>
        <InputField head="Email" placeholder="enter email id" type="email"/>
        <InputField head="Education" placeholder="education" type="text"/>
        <InputField head="Country" placeholder="country" type="text"/>
        <InputField head="State/Region" placeholder="state" type="text"/>
        
        <div className="name-details">
   
        </div>
        <button className='save'>Save Profile</button>
      </div>
      <div className='additional-info'>
        <div className="additional-info-head">
        <p>Edit Experience</p>
        <button className='experience'>Experience</button>
        </div>
        <InputField1 head="Experience in designing" placeholder="experience" type="text"/>
        <InputField1 head="Additional Details" placeholder="Additional Details" type="text"/>
      
      </div>
      </form>
    </div>
    </div>
  )
}

export default App
