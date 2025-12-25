import React from 'react'
import { Stack, TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ResetPass() {
  let navigate =useNavigate()
const {
  register,
  handleSubmit,
  formState: { errors },
}=useForm();
const onSubmit=async(data)=>{
  try{
    const res=await axios.post('https://upskilling-egypt.com:3007/api/auth/forgot-password',data)
    toast.success(res.data.message)
    navigate('/reset-pass')
  }
  catch(error){
    console.log(error)

  }
}

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
       Forget Your Password Now !
    </Typography>

      <Stack spacing={3}>
        <TextField variant='filled' label='Email' placeholder='mmm@gmail.com'
        {...register('email',{required:'Email is Required'})}
        >
          Email
        </TextField>
      
      
        
        <Button variant='contained'type="submit" color='error'>send</Button>
        <Button variant='outlined' onClick={()=>navigate('/')}  >Login</Button>
      </Stack>
   </Stack>
   </>
  )
}
