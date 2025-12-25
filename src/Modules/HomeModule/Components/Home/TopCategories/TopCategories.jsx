import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Typography, Button, IconButton, Stack, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';

// تأكدي من أن المسار صحيح أو استخدمي رابط خارجي للتجربة
import placeholderImg from '../../../../../assets/images/1.jpg';

export default function TopCategories() {
  const [categories, setCategories] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('https://upskilling-egypt.com:3007/api/category');
      setCategories(res.data || []);
          console.log('Fetched categories:', res.data);
    } catch (err) {
      console.log('Error fetching categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (!categories.length) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Stack 
        direction="row" 
        justifyContent="space-between" 
        alignItems="flex-end" 
        sx={{ mb: 5 }}
      >
        <Box>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Box sx={{ width: 25, height: 2, bgcolor: '#EE644B' }} />
            <Typography sx={{ color: '#EE644B', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
              Categories
            </Typography>
          </Stack>
          <Typography variant="h4" sx={{ color: '#393280', fontWeight: 'bold' }}>
            Explore our Top Categories
          </Typography>
        </Box>

        {/* Custom Navigation Arrows */}
        <Stack direction="row" spacing={2}>
          <IconButton 
            ref={prevRef}
            sx={{ 
              border: '1px solid #E0E0E0', 
              bgcolor: 'white',
              '&:hover': { bgcolor: '#f5f5f5' } 
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <IconButton 
            ref={nextRef}
            sx={{ 
              bgcolor: '#EE644B', 
              color: 'white', 
              '&:hover': { bgcolor: '#d55a43' } 
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>

      {/* Categories Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        autoplay={{ delay: 1000 , disableOnInteraction: false}}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat._id}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component="img"
              
                src={cat.books?.[0]?.image || placeholderImg}
                alt={cat.title}
           
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = placeholderImg;
                }}
                sx={{
                  width: '100%',
                  height: 350,
                  objectFit: 'cover',
                  borderRadius: 4,
                  mb: 2,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}
              />
              <Typography sx={{ fontWeight: 'bold', color: '#393280', fontSize: '1.3rem' }}>
                by {cat.books?.[0]?.author || 'Unknown'}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View More Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
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
            '&:hover': {
              borderColor: '#393280',
              bgcolor: 'rgba(57, 50, 128, 0.04)',
            }
          }}
        >
          VIEW MORE <Box component="span" sx={{ ml: 1 }}>→</Box>
        </Button>
      </Box>
    </Container>
  );
}