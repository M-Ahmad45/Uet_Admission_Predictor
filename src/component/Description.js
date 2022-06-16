import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'


const Description = ({text,link,link_text}) => {
  return (
  <div style={{padding:'1rem'}}>
    <Typography align='justify' variant='body1'>
        {text}
    </Typography>
    <Link style={{color:"black", fontWeight:"bold", textDecoration:"none"}} to={link}>
        {link_text}<ArrowForward fontSize="small" /></Link> 
  </div>
  )
}

Description.propTypes={
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    link_text: PropTypes.string.isRequired
}

export default Description