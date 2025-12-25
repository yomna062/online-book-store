import React from 'react'
import HeroSection from '../HeroSection/HeroSection.jsx';

import TopCategories from './TopCategories/TopCategories.jsx';
import { Margin } from '@mui/icons-material';
import NewBooks from './NewBooks/NewBooks.jsx';
import Featuredbook from '../Featuredbook/Featuredbook.jsx';
import BookOffer from '../BookOffer/BookOffer.jsx';
import AboutUs from '../AboutUs/AboutUs.jsx';
import LatestArticles from '../LatestArticles/LatestArticles.jsx';
export default function Home() {
  return (
  <>
 
      <HeroSection sx={{mb: 10}} />
      <TopCategories sx={{mb: 10}}/>
      <NewBooks sx={{mb: 10}}/>
      <Featuredbook sx={{mb: 10}}/>
      <BookOffer sx={{mb: 10}}/>
      <AboutUs sx={{mb: 10}}/>
      <LatestArticles/>
   </>
  )
}
