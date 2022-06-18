import { Input ,TextField , Button, Typography } from '@material-ui/core'
import React from 'react'
import "./InputField.css"


const InputField = ({title , isText , marks}) => {
  return (
    <div className="inputComponent">
        {isText?
        <>
        <TextField id="standard-basic" label={title} variant="standard" type={'number'} fullWidth InputLabelProps={{style: {fontSize: 20,fontFamily:"Roboto" , color:"black" , textAlign: 'center'}} }/>
        </>
        :
        <button className="predictBtn">{title}</button>
        }
    </div>
    
  )
}

export default InputField