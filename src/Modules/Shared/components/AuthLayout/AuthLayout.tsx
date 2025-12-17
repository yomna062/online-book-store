import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  Box,
  Grid,
  Stack,
} from '@mui/material';

import Authimg from '../../../../assets/images/Login-img.png';
import logo from '../../../../assets/images/Logo.png';

export default function AuthLayout() {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* ⬅️ صورة */}
      <Grid
        item
        md={6}
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '50%',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          component="img"
          src={Authimg}
          alt="Auth"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Grid>

      {/* ➡️ المحتوى */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          marginLeft: { md: '50%', xs: 0 },
        }}
      >
        <Stack >
          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              m: 5,

            }}
          >
            <img src={logo} alt="logo" />
          </Stack>

          {/* هنا أي صفحة */}
              
         <Stack >
           <Outlet />
         </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
