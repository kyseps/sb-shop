import { useState } from "react";




type Props = {
  href : string
}

function WhatsAppIcon({href} : Props) {


  const [isHovered , setIsHovered] = useState(false);
  // const [isDelayedHovered, setIsDelayedHovered] = useState(false);
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  //   setTimeout(() =>{
  //       setIsHovered(true);
  //   }, 300 );
  }
  const handleMouseLeave = () => {
    // setIsDelayedHovered(false);
    setIsHovered(false);
  }


  return (
    <a href={href}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >

      {
        isHovered
        ?(
       <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="41" height="41" rx="10" fill="url(#paint0_linear_111_275)"/>
          <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_111_275)" stroke-opacity="0.4" stroke-width="2"/>
          <g clip-path="url(#clip0_111_288)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 11.542C26.1623 11.5391 30.4674 15.8517 30.4674 21.0037C30.4674 26.162 26.1627 30.4617 21.0001 30.4583C19.6552 30.4574 18.3085 30.174 17.067 29.6066L12.3802 30.454C12.1273 30.4997 11.8692 30.406 11.7046 30.2086C11.5399 30.0111 11.4941 29.7404 11.5845 29.4999L12.9259 25.931C12.0228 24.4495 11.5416 22.737 11.5416 21.0037C11.5416 15.8492 15.8415 11.5437 21.0003 11.542ZM25.7499 25.0227C24.6966 25.8746 23.0672 26.7341 21.5092 25.734C19.4655 24.4221 17.6571 22.6967 16.345 20.6531C15.5758 19.4551 16.2997 17.5377 17.3826 16.3694C17.815 15.9029 18.5259 15.9767 18.9956 16.4055L19.9845 17.3082C20.2852 17.5828 20.2958 18.06 20.1083 18.4215C19.8126 18.9916 19.6388 19.7558 20.0043 20.3254C20.4636 21.0409 21.0304 21.7445 22.3809 22.1555C22.7894 22.2799 23.3146 22.2263 23.7595 22.046C24.1333 21.8946 24.6059 21.8963 24.882 22.1902L25.8011 23.1687C26.308 23.7084 26.3256 24.557 25.7499 25.0227Z" fill="#E9F5FC"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_111_275" x1="20" y1="41" x2="20" y2="-9.90369e-07" gradientUnits="userSpaceOnUse">
          <stop stop-color="#13141C"/>
          <stop offset="1" stop-color="#000001" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_111_275" x1="20.5" y1="0" x2="20.5" y2="41" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E9F5FC" stop-opacity="0.42"/>
          <stop offset="1" stop-color="#575757" stop-opacity="0.22"/>
          </linearGradient>
          </defs>
       </svg>



        )
        :(
      
            
       <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="41" height="41" rx="10" fill="url(#paint0_linear_111_288)"/>
          <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_111_288)" stroke-opacity="0.4" stroke-width="2"/>
          <g clip-path="url(#clip0_111_288)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 11.542C26.1623 11.5391 30.4674 15.8517 30.4674 21.0037C30.4674 26.162 26.1627 30.4617 21.0001 30.4583C19.6552 30.4574 18.3085 30.174 17.067 29.6066L12.3802 30.454C12.1273 30.4997 11.8692 30.406 11.7046 30.2086C11.5399 30.0111 11.4941 29.7404 11.5845 29.4999L12.9259 25.931C12.0228 24.4495 11.5416 22.737 11.5416 21.0037C11.5416 15.8492 15.8415 11.5437 21.0003 11.542ZM25.7499 25.0227C24.6966 25.8746 23.0672 26.7341 21.5092 25.734C19.4655 24.4221 17.6571 22.6967 16.345 20.6531C15.5758 19.4551 16.2997 17.5377 17.3826 16.3694C17.815 15.9029 18.5259 15.9767 18.9956 16.4055L19.9845 17.3082C20.2852 17.5828 20.2958 18.06 20.1083 18.4215C19.8126 18.9916 19.6388 19.7558 20.0043 20.3254C20.4636 21.0409 21.0304 21.7445 22.3809 22.1555C22.7894 22.2799 23.3146 22.2263 23.7595 22.046C24.1333 21.8946 24.6059 21.8963 24.882 22.1902L25.8011 23.1687C26.308 23.7084 26.3256 24.557 25.7499 25.0227Z" fill="#E9F5FC"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_111_288" x1="20.516" y1="0" x2="20.516" y2="41" gradientUnits="userSpaceOnUse">
          <stop stop-color="#13141C"/>
          <stop offset="1" stop-color="#000001" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_111_288" x1="20.5" y1="0" x2="20.5" y2="41" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E9F5FC" stop-opacity="0.42"/>
          <stop offset="1" stop-color="#575757" stop-opacity="0.22"/>
          </linearGradient>
          <clipPath id="clip0_111_288">
          <rect width="20" height="20" fill="white" transform="translate(11 11)"/>
          </clipPath>
          </defs>
       </svg>
        )
      }
      





    </a>

    
  )
}

export default WhatsAppIcon