import React from 'react'
import "./InputField1.css"
const Inputfield1 = (props) => {
  return (
    <div className='input-parent1'>
      <p>{props.head}</p>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default Inputfield1
