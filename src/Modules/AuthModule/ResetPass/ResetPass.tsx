import React from 'react'
import { Stack, TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function ResetPass() {
let {
  register,
  handleSubmit,
  formState: { errors },
}=useForm();
const onSubmit=async(data)=>{
  try{
    const res=await axios.post('https://upskilling-egypt.com:3007/api/auth/reset-password',data)
    console.log(res)
  }
  catch(error){
    console.log(error)

  }
}
// /reset-password
  return (
  
   <>
   <Stack component="form" onSubmit={handleSubmit(onSubmit)}
    sx={{
    p:4,
    mx:5,
    display:'flex',
    justifyContent:'center',
    
    
 width: { xs: '90%', sm: 400 }, 
   }}>
    <Typography variant='body2'>
        Welcome back!
    </Typography>
    <Typography variant='h5' fontWeight="bold">
        Reset Your Password Now !
    </Typography>

      <Stack spacing={3}>
        <TextField variant='filled' label='Email' placeholder='mmm@gmail.com'
        {...register('email',{required:'Email is Required'})}
        >
          Email
        </TextField>
        <TextField variant='filled' label='OTP' placeholder='1234'
        {...register('OTP',{required:'Password is required'})}
        >
          OTP
        </TextField>
        <TextField variant='filled' label='Password' placeholder='Password123!'
        {...register('password',{required:'password is required'})}
        >
          Password
        </TextField>
        
        <Button variant='contained' color='error'>send</Button>
        <Button variant='outlined' >Login</Button>
      </Stack>
   </Stack>
   </>
  )
}
