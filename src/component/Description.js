import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'


const Description = ({text,link,link_text}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [textFont, setTextFont] = useState(22);
  const [boxWidth, setBoxWidth] = useState("30em");

  useEffect(()=>{
    isMobile?setTextFont(36):setTextFont(22);
    isMobile?setBoxWidth("35em"):setBoxWidth("30em")
  }, [isMobile]);

  return (
    <Container style={{width: boxWidth, height:"auto"}}>  
        <Typography align='justify' variant='body1' style={{fontSize:textFont}}>
            {text}
        </Typography>
        <Link style={{color:"black", fontWeight:"bold", textDecoration:"none", fontSize:textFont}} to={link}>
            {link_text}<ArrowForward fontSize="small" /></Link> 
    </Container>
  )
}

Description.propTypes={
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    link_text: PropTypes.string.isRequired
}

export default Description