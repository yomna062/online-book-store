import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
  Divider
} from '@mui/material';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  PersonOutline,
  ShoppingBagOutlined,
  FavoriteBorder
} from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/AuthContext/AuthContext';

export default function NavBar() {
  const navigate = useNavigate();
  const { loginData } = useContext(AuthContext);

  const LogOut = async () => {
    try {
      await axios.get(
        'https://upskilling-egypt.com:3007/api/auth/logout',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      localStorage.removeItem('accessToken');
      navigate('/');
      toast.success('Logged out successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      {/* TOP BAR */}
      <Box sx={{ bgcolor: '#393280', color: 'white', py: 0.5 }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption">
              📞 +91 8374902234
            </Typography>
            <Box>
              <IconButton size="small" color="inherit"><Facebook fontSize="inherit" /></IconButton>
              <IconButton size="small" color="inherit"><Instagram fontSize="inherit" /></IconButton>
              <IconButton size="small" color="inherit"><LinkedIn fontSize="inherit" /></IconButton>
              <IconButton size="small" color="inherit"><Twitter fontSize="inherit" /></IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* MAIN NAV */}
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, justifyContent: 'space-between' }}>

          <Box sx={{ width: 60, height: 60, bgcolor: '#ccc', borderRadius: '50%' }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {['HOME', 'ABOUT US', 'BOOKS', 'NEW RELEASE', 'CONTACT US', 'BLOG'].map((text, index) => (
              <React.Fragment key={text}>
                <Button
                  sx={{
                    color: text === 'HOME' ? '#EF6B4A' : '#333',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}
                >
                  {text}
                </Button>
                {index < 5 && (
                  <Divider orientation="vertical" flexItem sx={{ height: 20 }} />
                )}
              </React.Fragment>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {loginData ? (
              <>
                <IconButton onClick={() => navigate('/profile')}>
                  <PersonOutline />
                </IconButton>

                <Divider orientation="vertical" flexItem sx={{ height: 25 }} />

                <IconButton><ShoppingBagOutlined /></IconButton>
                <Divider orientation="vertical" flexItem sx={{ height: 25 }} />

                <IconButton><FavoriteBorder /></IconButton>

                <Button
                  onClick={LogOut}
                  variant="outlined"
                  size="small"
                  sx={{ ml: 2 }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate('/')}
              >
                Login
              </Button>
            )}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
