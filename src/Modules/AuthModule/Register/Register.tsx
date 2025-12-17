import React from 'react';
import {
  Box,
  Grid,
  Stack,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try{
      const  response= await axios.post('https://upskilling-egypt.com:3007/api/auth/register',data)
      console.log(response.data)
      toast.success('Account is added Success')

    }catch(error){
      console.log('errorrr')
      toast.error('error ')
    }
    console.log(data)
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mx: 6 }}>
      <Stack sx={{ mb: 3 }}>
        <Typography variant="body2" sx={{ color: grey[500] }}>
          Create new account
        </Typography>

        <Typography variant="h5" fontWeight="bold">
          Register
        </Typography>
      </Stack>

      <Box sx={{ width: '100%' }}>
        <Grid container spacing={1}>
          <Grid item size={6}>
            <TextField fullWidth label="FirstName" variant="filled" {...register("first_name")} />
          </Grid>

          <Grid item size={6}>
            <TextField fullWidth label="LastName" variant="filled" {...register("last_name")} />
          </Grid>

          <Grid item size={12}>
            <TextField fullWidth label="Email" variant="filled" {...register("email")} />
          </Grid>

          <Grid item size={12}>
            <TextField fullWidth label="Password" type="password" variant="filled" {...register("password")} />
          </Grid>

          {/* إضافة Role select في آخر الفورم */}
          <Grid item size={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                defaultValue="User"
                {...register("role")}
              >
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" color="error" fullWidth sx={{ my: 2 }} type="submit">
        Register
      </Button>

      <Button variant="outlined" onClick={() => navigate('/')}>
        Login
      </Button>
    </Stack>
  );
}
