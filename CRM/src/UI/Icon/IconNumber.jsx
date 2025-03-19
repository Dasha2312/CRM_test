import React from 'react';

function IconNumber({color, size='44'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none">
      <path d="M7.33334 31.1667V12.8333L20.1667 31.1667V12.8333M27.5 31.1667H36.6667M27.5 18.3333C27.5 19.792 27.9829 21.191 28.8424 22.2224C29.702 23.2539 30.8678 23.8333 32.0833 23.8333C33.2989 23.8333 34.4647 23.2539 35.3242 22.2224C36.1838 21.191 36.6667 19.792 36.6667 18.3333C36.6667 16.8746 36.1838 15.4757 35.3242 14.4442C34.4647 13.4128 33.2989 12.8333 32.0833 12.8333C30.8678 12.8333 29.702 13.4128 28.8424 14.4442C27.9829 15.4757 27.5 16.8746 27.5 18.3333Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default IconNumber;