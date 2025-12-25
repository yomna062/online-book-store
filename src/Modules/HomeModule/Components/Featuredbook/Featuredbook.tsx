import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import bookimg from '../../../../assets/images/book.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Featurebook.css'
import 'swiper/css';
import 'swiper/css/pagination';

export default function FeaturedBook() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
    >
      {[1, 2, 3].map((item) => (
        <SwiperSlide key={item}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              p: 4,
              backgroundColor: '#f9f9f9',
              borderRadius: 2,
            }}
          >
            {/* الصورة */}
            <Box sx={{ flex: 1 }}>
              <Box
                component="img"
                src={bookimg}
                alt="Featured Book"
                sx={{
                  width: '100%',
                  borderRadius: 1,
                  objectFit: 'cover',

                }}
              />
            </Box>

            {/* النص */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', color: '#393280', mb: 4 }}
              >
                Featured book
              </Typography>

              <Box
                sx={{
                  width: '25%',
                  height: '3px',
                  bgcolor: '#E94560',
                  mb: 2,
                }}
              />

              <Typography
                variant="subtitle1"
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                By Timbur Hood
              </Typography>

              <Typography
                variant="h5"
                sx={{ color: '#393280', my: 2, fontWeight: 'bold' }}
              >
                Birds Gonna Be Happy
              </Typography>

              <Typography
                variant="body1"
                sx={{ mt: 2, color: 'text.secondary' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>

              <Typography
                variant="h6"
                sx={{ mt: 4, color: '#E94560', fontWeight: 'bold' }}
              >
                $ 45.00
              </Typography>

              <Box sx={{ mt: 6 }}>
                <Button
                  variant="outlined"
                  sx={{
                    px: 4,
                    py: 1.5,
                    color: '#393280',
                    borderColor: '#393280',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  VIEW MORE →
                </Button>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
