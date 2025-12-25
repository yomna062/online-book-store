import { Box, Stack, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import axios from 'axios'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import bookimg from '../../../../../assets/images/1.jpg'

export default function NewBooks() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        'https://upskilling-egypt.com:3007/api/book'
      )
      setBooks(res.data?.data || [])
    } catch (err) {
      console.log('Error fetching books:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Box sx={{ bgcolor: '#FCECEC', py: 6, px: 2 }}>
      {/* Title */}
      <Stack alignItems="center" mb={4}>
        <Typography sx={{ color: 'gray' }} variant="subtitle1">
          Some quality items
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', color: '#393280', mt: 1 }}
        >
          New Release Books
        </Typography>
      </Stack>

      {/* Loading */}
      {loading && (
        <Typography align="center" sx={{ color: 'gray' }}>
          Loading books...
        </Typography>
      )}

      {/* Swiper */}
      {!loading && books.length > 0 && (
        <Box sx={{ minHeight: 480 }}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={books.length > 1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {books.map((book) => (
              <SwiperSlide key={book._id}>
                <Box
                  sx={{
                    maxWidth: 250,
                    mx: 'auto',
                    textAlign: 'center',
                    p: 3,
                    bgcolor: '#fff',
                    borderRadius: 2,
                    position: 'relative',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  {/* Book Image */}
                  <Box
                    component="img"
                    src={book.image || bookimg}
                    alt={book.name}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />

                  {/* Add to Cart Button */}
                  <Button
                    variant="contained"
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: '#E94560',
                      color: '#fff',
                      textTransform: 'none',
                      '&:hover': { bgcolor: '#d73453' },
                      opacity: 0,
                      transition: '0.3s',
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>

                {/* Book Info */}
                <Box align="center">
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, color: '#393280' }}
                  >
                    {book.name}
                  </Typography>

                  <Typography sx={{ color: 'gray' }}>
                    by {book.author || 'Unknown'}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: '#E94560',
                      mt: 1,
                    }}
                  >
                    ${Number(book.price || 0).toFixed(2)}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Divider */}
          <Box
            sx={{
              width: '100%',
              height: '1px',
              bgcolor: 'gray',
              opacity: 0.3,
              mb: 2,
              mt: 10,
            }}
          />

          {/* View All Products */}
          <Box display="flex" justifyContent="flex-end">
            <Typography
              sx={{
                color: '#E94560',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              View All Products →
            </Typography>
          </Box>
        </Box>
      )}

      {/* No Data */}
      {!loading && books.length === 0 && (
        <Typography align="center" sx={{ color: 'gray' }}>
          No books available
        </Typography>
      )}
    </Box>
  )
}
