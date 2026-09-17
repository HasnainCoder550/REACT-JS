import { Box, TextField } from '@mui/material'
import React from 'react'

const Input = ({label , type , handler, value}) => {
  return (
    <Box
    component="form"
    className='mb-3 mt-5'
    // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    // noValidate
    // autoComplete="off"
  >
    <TextField sx={{
        width:"100%"
        
    }} 
    label={label}
    variant="outlined"
    onChange={(e) => handler(e.target.value, type)}
    type={type}
    value={value}
    />
    {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
  </Box>
  )
}

export default Input
