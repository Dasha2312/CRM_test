import React from 'react';

function IconSearch({color, size="24"}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18C11.775 17.9998 13.4989 17.4056 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.4051 13.4997 17.9997 11.7755 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill={color}/>
    </svg>

  );
}

export default IconSearch;