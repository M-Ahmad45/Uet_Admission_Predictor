import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { CircularProgress, Box } from '@mui/material';
import { useEffect } from 'react';

const Result = ({chance}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [circleSize,setCircleSize] = useState("12em");
  const [textFont,setTextFont] = useState(32);

  useEffect(()=>{
    isMobile?setCircleSize("18em"):setCircleSize("12em");
    isMobile?setTextFont(56):setTextFont(32);
  },[isMobile]);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress variant="determinate" value={chance} size={circleSize} />
      
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body1" style={{fontWeight:"bold",fontSize:textFont }}>{chance}%</Typography>
    </Box>
  </Box>
  )
}

Result.propTypes={
    chance: PropTypes.number.isRequired
}

export default Result