import React from 'react';
import {
  Box,
  Grid,
  Stack,
  TextField,
  Button,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    
    try {
      const  response = await axios.post('https://upskilling-egypt.com:3007/api/auth/login', data);
      console.log(response.data);
      toast.success('Login success');
   
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please check your credentials.');
    }
  }

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mx: 6 }}>
      {/* Header */}
      <Stack sx={{ mb: 3 }}>
        <Typography variant="body2" sx={{ color: grey[500] }}>
          Welcome back!
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Login to your account
        </Typography>
      </Stack>

      {/* Form Fields */}
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={1}>
          {/* Email Field */}
          <Grid item size={12}>
            <TextField
              fullWidth
              label="Email"
              placeholder='mmm@gmail.com'
              variant="filled"
              {...register("email", { required: true })}
              error={!!errors.email}
              helperText={errors.email ? "Email is required" : ""}
            />
          </Grid>

          {/* Password Field */}
          <Grid item size={12}>
            <TextField
              fullWidth
              label="Password"
              placeholder='Password123!'
              variant="filled"
              type="password"
              {...register('password', { required: true })}
              error={!!errors.password}
              helperText={errors.password ? "Password is required" : ""}
            />
          </Grid>
        </Grid>

        <Typography
          color='error'
          sx={{ my: 1, cursor: 'pointer' }}
          onClick={() => navigate('/forget-Pass')}
        >
          Forget Password
        </Typography>
      </Box>

      {/* Buttons */}
      <Button
        type="submit"
        variant="contained"
        color="error"
        fullWidth
        sx={{ my: 2 }}
      >
        Login
      </Button>

      <Button variant="outlined" onClick={() => navigate('/register')}>
        Register
      </Button>
    </Stack>
  );
}
