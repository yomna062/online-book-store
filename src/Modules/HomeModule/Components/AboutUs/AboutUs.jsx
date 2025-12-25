import React from 'react';
import { Box, Button, Stack, Typography, TextField, InputAdornment } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Newsletter() {
  return (
    <Box sx={{ backgroundColor: '#FCEBEA', py: 10, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Orange Container */}
      <Stack
        sx={{
          width: '100%',
          maxWidth: 900,
          backgroundColor: '#ED553B',
          py: 8,
          px: 4,
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          borderRadius: 2
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Subscribe to Our Newsletter
        </Typography>
        <Typography sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto', mb: 4 }}>
          Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,
          consectetur. Elit adipiscing enim pharetra hac.
        </Typography>

        {/* White Subscription Box */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -30, // نص الارتفاع للخروج من الصندوق البرتقالي
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            p: 1,
            display: 'flex',
            alignItems: 'center',
            width: '90%',
            maxWidth: 600,
            boxShadow: '0px 5px 20px rgba(0,0,0,0.1)',
            borderRadius: 1
          }}
        >
          <TextField
            fullWidth
            placeholder="youremail123@gmail.com"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: '#ccc', mr: 1 }} />
                </InputAdornment>
              ),
              sx: { py: 1 }
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ED553B',
              '&:hover': { backgroundColor: '#d44830' },
              px: 4,
              py: 1.5,
              borderRadius: 0,
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Stack>

      {/* Spacer */}
      <Box sx={{ height: 60 }} />
    </Box>
  );
}
