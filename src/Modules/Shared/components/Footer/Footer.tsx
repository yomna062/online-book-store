import React from 'react';
import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../../../../assets/images/FooterLogo.png'; 
export default function Footer() {
  const whiteColor = '#FFFFFF';
  const bgColor = '#ED553B'; // Background for entire footer

  return (
    <Box sx={{ bgcolor: bgColor, color: whiteColor, pt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'space-between' }}>
          
          {/* Brand & Social */}
          <Box sx={{ flex: '1 1 250px', minWidth: 250 }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              color={'white'}
              bgcolor={'white'}
              sx={{ width: 80, mb: 2 }}
            />
            <Typography sx={{ mb: 3, color: whiteColor, lineHeight: 1.7 }}>
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: whiteColor, p: 0.5 }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: whiteColor, p: 0.5 }}><LinkedInIcon /></IconButton>
              <IconButton sx={{ color: whiteColor, p: 0.5 }}><TwitterIcon /></IconButton>
              <IconButton sx={{ color: whiteColor, p: 0.5 }}><YouTubeIcon /></IconButton>
            </Stack>
          </Box>

          {/* Company Links */}
          <Box sx={{ flex: '1 1 150px', minWidth: 150 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: whiteColor }}>COMPANY</Typography>
            <Stack spacing={1}>
              {['HOME', 'ABOUT US', 'BOOKS', 'NEW RELEASE', 'CONTACT US', 'BLOG'].map((text) => (
                <Link 
                  key={text} 
                  href="#" 
                  underline="none" 
                  sx={{ color: whiteColor, fontSize: '0.85rem', '&:hover': { color: '#FFD700' } }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Important Links */}
          <Box sx={{ flex: '1 1 150px', minWidth: 150 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: whiteColor }}>IMPORTANT LINKS</Typography>
            <Stack spacing={1}>
              {['Privacy Policy', 'FAQs', 'Terms of Service'].map((text) => (
                <Link 
                  key={text} 
                  href="#" 
                  underline="none" 
                  sx={{ color: whiteColor, fontSize: '0.85rem', '&:hover': { color: '#FFD700' } }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Box>

        </Box>
      </Container>

      {/* Bottom Copyright */}
      <Box sx={{ py: 3, mt: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: whiteColor, fontSize: '0.85rem' }}>
              © 2022 Arihant. All Rights Reserved.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Link href="#" underline="none" sx={{ color: whiteColor, fontSize: '0.85rem', fontWeight: 600 }}>Privacy</Link>
              <Typography sx={{ color: whiteColor }}>|</Typography>
              <Link href="#" underline="none" sx={{ color: whiteColor, fontSize: '0.85rem', fontWeight: 600 }}>Terms of Service</Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
