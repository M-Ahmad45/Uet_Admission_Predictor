import React from 'react'
import PropTypes from 'prop-types'

const Result = ({chance}) => {

    const div_style = {
        borderRadius:"50%",
        border: "5px solid red",
        color:"black",
        fontWeight:"bold",
        width: "5em",
        height:"5em",
        fontSize:20,
    };

  return (
    <div style={div_style}>
        <div style={{marginTop:25, marginLeft:25, width:50}}>{chance}%</div>
    </div>
  )
}

Result.propTypes={
    chance: PropTypes.number.isRequired
}

export default Result