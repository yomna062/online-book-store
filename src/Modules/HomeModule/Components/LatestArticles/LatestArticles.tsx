import React from 'react';
import { Box, Typography, Container, Stack, Button } from '@mui/material';
import img1 from '../../../../assets/images/img11.jpg';
import img2 from '../../../../assets/images/img22.jpg';
import img3 from '../../../../assets/images/img3.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const articles = [
  { id: 1, img: img1, date: '2 Aug, 2021', title: 'Reading books always makes the moments happy' },
  { id: 2, img: img2, date: '2 Aug, 2021', title: 'Reading books always makes the moments happy' },
  { id: 3, img: img3, date: '2 Aug, 2021', title: 'Reading books always makes the moments happy' },
];

export default function LatestArticles() {
  return (
    <Box sx={{ backgroundColor: '#F7FCFC', py: 8, mt: 3 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="subtitle1"
            sx={{ color: '#707070', mb: 1, textTransform: 'uppercase' }}
          >
            Read our articles
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: '#173F5F', fontWeight: 'bold' }}
          >
            Latest Articles
          </Typography>
        </Box>

        {/* Articles */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 4,
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {articles.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: { xs: '100%', sm: '48%', md: '32%' },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />

              <Typography
                sx={{
                  mt: 2,
                  color: '#74642F',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                }}
              >
                {item.date}
              </Typography>

              <Typography
                variant="h5"
                sx={{ color: '#173F5F', mt: 1 }}
              >
                {item.title}
              </Typography>

              {/* Divider */}
              <Box
                sx={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#C8C8C8',
                  mt: 2,
                  mb: 2,
                }}
              />

              {/* Social Icons */}
             <Stack direction="row" spacing={1} justifyContent="flex-end" >
  <FacebookIcon sx={{ color: '#3b5998', cursor: 'pointer' ,fontSize: '18px'}} />
  <TwitterIcon sx={{ color: '#3b5998', cursor: 'pointer' ,fontSize: '18px'}} />
  <InstagramIcon sx={{ color: '#3b5998', cursor: 'pointer' ,fontSize: '18px'}} />
</Stack>

            </Box>

          ))}
        </Box>
       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
  <Button variant='outlined'
    endIcon={<ArrowForwardIcon />}
    sx={{color: '#173F5F',fontWeight: 'bold',py:2,px:3,backgroundColor: 'transparent', border: '1px solid #C0C0C0',textTransform: 'uppercase' }} >
    Read All Articles
  </Button>
</Box>
      </Container>
    </Box>
  );
}
