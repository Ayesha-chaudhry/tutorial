import React from 'react';
import { data } from './data';

const Card = () => {
  return (
    <div className='cards'>
      {data.map((item) => (
        <div className='card' key={item.id}>
          <img src={item.imgscr} alt='img' className='card_img'/>
          <div className='card_info'>
            <span className='card_category'>{item.title}</span>
            <h3 className='card_title'>{item.sname}</h3>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
