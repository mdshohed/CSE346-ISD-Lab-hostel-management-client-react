import React, { useState } from 'react';
import news from '../../hooks/news';
import NewsPage from './NewsPage';

const News = () => {
  const [newsPage, setNewsPage] = useState(news); 
  console.log(newsPage);
  return (
    <div className='container mx-auto my-10'>
      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-2'>
        {
          newsPage.map(news=><NewsPage key={news.id} news={news}></NewsPage>)
        }
      </div>
      
    </div>
  );
};

export default News;