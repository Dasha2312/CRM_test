
import {IconProps} from "../../interfaces/index"

function IconArrowDown({color, width="25", height="12"}: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4_792)">
      <path d="M17.8644 2.452L18.9244 3.513L13.1474 9.292C13.0549 9.38516 12.9448 9.45909 12.8235 9.50953C12.7023 9.55998 12.5723 9.58595 12.4409 9.58595C12.3096 9.58595 12.1796 9.55998 12.0583 9.50953C11.9371 9.45909 11.827 9.38516 11.7344 9.292L5.95444 3.513L7.01444 2.453L12.4394 7.877L17.8644 2.452Z" fill={color} />
      </g>
      <defs>
      <clipPath id="clip0_4_792">
      <rect width="12" height="24" fill="white" transform="matrix(0 1 -1 0 24.4444 0)"/>
      </clipPath>
      </defs>
    </svg>

  );
}

export default IconArrowDown;