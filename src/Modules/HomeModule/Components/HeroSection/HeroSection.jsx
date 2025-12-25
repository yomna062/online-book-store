// HeroSection.jsx
import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bookImg from '../../../../assets/images/hero.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HeroSection.css';

export default function HeroSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box
      className="HeroSection"
      sx={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(90deg, #FFE5E5 0%, #F5FFFE 100%)',
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          // ربط الأزرار المخصصة
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {[1, 2].map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                px: { xs: 3, md: 10 },
                py: { xs: 6, md: 0 },
                minHeight: { xs: 'auto', md: '500px' },
                gap: { xs: 4, md: 0 },
              }}
            >
              {/* LEFT CONTENT */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 2,
                  maxWidth: 600,
                  textAlign: { xs: 'center', md: 'left' },
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: '#2e2e7d',
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Ipsum Dolor Si
                </Typography>

                <Typography
                  sx={{
                    color: '#2e2e7d',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                  libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                  Amet, quis urna, a eu.
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    width: 160,
                    color: '#2e2e7d',
                    borderColor: '#2e2e7d',
                    mt: 2,
                    '&:hover': {
                      borderColor: '#2e2e7d',
                      backgroundColor: 'rgba(46,46,125,0.1)',
                    },
                  }}
                >
                  Read more <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
              </Box>

              {/* RIGHT IMAGE */}
              <Box>
                <img
                  src={bookImg}
                  alt="Hero"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}

        {/* CUSTOM NAVIGATION ARROWS */}
        <Box ref={prevRef} className="nav-button custom-prev">
          <ArrowBackIcon />
        </Box>
        <Box ref={nextRef} className="nav-button custom-next">
          <ArrowForwardIcon />
        </Box>
      </Swiper>
    </Box>
  );
}
