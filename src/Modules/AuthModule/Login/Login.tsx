import React, { useContext } from 'react';
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
import { AuthContext } from '../../../Context/AuthContext/AuthContext';

export default function Login() {
  const { saveLoginData } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        'https://upskilling-egypt.com:3007/api/auth/login',
        data
      );

      localStorage.setItem('accessToken', response.data.data.accessToken);

      saveLoginData();
      toast.success('Login Successful!');
      navigate('/home');

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Login Failed');
    }
  };

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
          <Grid item size={12}>
            <TextField
              fullWidth
              label="Email"
              placeholder="mmm@gmail.com"
              variant="filled"
              {...register("email", { required: true })}
              error={!!errors.email}
              helperText={errors.email ? "Email is required" : ""}
            />
          </Grid>

          <Grid item size={12}>
            <TextField
              fullWidth
              label="Password"
              placeholder="Password123!"
              variant="filled"
              type="password"
              {...register('password', { required: true })}
              error={!!errors.password}
              helperText={errors.password ? "Password is required" : ""}
            />
          </Grid>
        </Grid>

        <Typography
          color="error"
          sx={{ my: 1, cursor: 'pointer' }}
          onClick={() => navigate('/forget-Pass')}
        >
          Forget Password
        </Typography>
      </Box>

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
