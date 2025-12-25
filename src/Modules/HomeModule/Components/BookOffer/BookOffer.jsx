import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import img from '../../../../assets/images/bookss.png';

import 'swiper/css';
import 'swiper/css/pagination';

export default function BookSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      style={{ paddingBottom: '40px' }}
    >
      {[1, 2, 3].map((item) => (
        <SwiperSlide key={item}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: '#FDF0F0',
              borderRadius: '20px',
              p: { xs: 4, md: 6 },
              gap: 4,
            }}
          >
            {/* النص */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: '#3F3D56',
                  mb: 2,
                }}
              >
                All books are 50% off now! <br />
                Don't miss such a deal!
              </Typography>

              <Typography sx={{ color: '#707070', mb: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>

              {/* العدّاد */}
              <Box sx={{ display: 'flex', gap: 3 }}>
                {['768 DAYS', '01 HOUR', '27 MINT', '55 SEC'].map((t, i) => (
                  <Box key={i}>
                    <Typography sx={{ fontWeight: 'bold', color: '#FF4D4D' }}>
                      {t.split(' ')[0]}
                    </Typography>
                    <Typography variant="caption">
                      {t.split(' ')[1]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* الصورة */}
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box
                component="img"
                src={img}
                alt="Books"
                sx={{ width: '100%' }}
              />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
