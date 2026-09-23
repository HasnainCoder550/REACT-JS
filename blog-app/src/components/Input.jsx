import { Box, TextField } from '@mui/material'
import React from 'react'

const Input = ({id,label , type , handler, value}) => {
  // console.log(id)
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
    onChange={(e) => handler(id,id === "file" ? e.target.files[0] : e.target.value)}
    type={type}
    value={value}
    variant="outlined"
    />
    {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
  </Box>
  )
}

export default Input
