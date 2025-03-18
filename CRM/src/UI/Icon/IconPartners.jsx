function IconPartners({color, size = '24', className}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="1" fill="white"/>
      <path d="M9.33333 14.9167C11.5195 14.9167 13.2917 13.1445 13.2917 10.9583C13.2917 8.77221 11.5195 7 9.33333 7C7.14721 7 5.375 8.77221 5.375 10.9583C5.375 13.1445 7.14721 14.9167 9.33333 14.9167Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6667 21.25C15.6667 19.5703 14.9994 17.9594 13.8117 16.7717C12.6239 15.5839 11.013 14.9167 9.33333 14.9167C7.65363 14.9167 6.04272 15.5839 4.85499 16.7717C3.66726 17.9594 3 19.5703 3 21.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 10.25C18.7259 10.25 20.125 8.85089 20.125 7.125C20.125 5.39911 18.7259 4 17 4C15.2741 4 13.875 5.39911 13.875 7.125C13.875 8.85089 15.2741 10.25 17 10.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 15.25C22 13.9239 21.4732 12.6521 20.5355 11.7145C19.5979 10.7768 18.3261 10.25 17 10.25C15.6739 10.25 14.4377 11.0623 13.5 12C12.5623 12.9377 12 13.9239 12 15.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default IconPartners;