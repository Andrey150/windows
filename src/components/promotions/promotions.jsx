import React from 'react';
import PromotionItem from "./promotion-item/promotion-item.jsx";

const Promotions = () => {
  return (
    <div className='promotions'>
      <div className="wrap">
        <h2>Доступные акции</h2>
        <div className="promotion-items-wrap">
          <PromotionItem/>
        </div>
      </div>
    </div>
  );
};

export default Promotions;