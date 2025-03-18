import React from 'react';

function IconFinance({color, size="25"}) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.38893 2.5L3.38892 19.5C3.38892 20.6046 4.28435 21.5 5.38892 21.5H22.3889" stroke={color} strokeWidth="1.5" strokeMiterlimit="1.41421" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.38892 15.5C3.38892 14 4.88892 11.5 7.88892 12C9.66716 12.2964 10.8475 17.5414 13.8889 14.5C15.8889 12.5 15.3889 11.6395 17.8889 11.5C20.3889 11.3605 21.1079 9.47631 21.8889 8.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="1.41421" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.3889 8.5L22.254 7.61676L23.3889 10" stroke={color} strokeMiterlimit="1.41421" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default IconFinance;