import React from 'react';

function Banner({ children, modifierClass }) {

  return (
    <div className={`banner ${modifierClass}`}>
      {children}
    </div>
  );
}

export default Banner;
