import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import {mens_kurta} from '../../../Data/mens_kurta';
import { mens_shoes } from '../../../Data/mens_shoes';
import { mens_shirts } from '../../../Data/mens_shirts';
import {womens_sarees} from '../../../Data/womens_sarees';
import {women_dresses} from '../../../Data/women_dresses';


const HomePage = () => {
  return (
    <div>
      <MainCarousel/>

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
       <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
       <HomeSectionCarosel data={mens_shoes} sectionName={"Men's Shoes"}/>
       <HomeSectionCarosel data={mens_shirts} sectionName={"Men's Shirts"}/>
       <HomeSectionCarosel data={womens_sarees} sectionName={"Women's Sarees"}/>
       <HomeSectionCarosel data={women_dresses} sectionName={"Women's Dresses"}/>
       
      </div>
    </div>
  );
}

export default HomePage;
