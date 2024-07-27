import React from 'react';

import s from './Banner.module.scss';

function Banner({ children, modifierClass }) {

  return (
    <div className={`${s.banner} ${s[modifierClass]}`}>
      {children}
    </div>
  );
}

export default Banner;
