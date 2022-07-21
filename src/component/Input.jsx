import React from 'react'
import InputField from './InputField'
import "./Input.css"
const Input = () => {
  return (
    <div className="inputBlock">
        <div className="container">
            <InputField title="Enter your matric marks" isText={true} />
            <InputField title="Enter your inter marks" isText={true} />
            <InputField title="Enter your ecat marks" isText={true} />
            <InputField title="Predict" isText={false}/>
        </div>
        
    </div>
  )
}

export default Input