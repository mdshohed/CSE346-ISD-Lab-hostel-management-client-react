import React from 'react';

const NewsPage = ({news}) => {
  const {img, name, Details } = news; 
  return (
    <div>
      {/* <img style={{width: "200px", height:"200px"}} src={img} alt=''></img> */}
      <div class="card bg- shadow-xl">
      <figure><img src={img} style={{width: "200px", height:"200px"}} alt="hostel" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{Details}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;