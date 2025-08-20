import { useState } from "react";



type Props = {
    href : string
}
function InstagramIcon({href} : Props) {

  
  const [isHovered , setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (

    <a
    href={href}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      
      {
        isHovered
        ?(

          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="41" height="41" rx="10" fill="url(#paint0_linear_111_275)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8432 12.1235C13.7889 12.1235 12.1236 13.7889 12.1236 15.8432V25.7624C12.1236 27.8166 13.7889 29.4821 15.8432 29.4821H25.7624C27.8167 29.4821 29.482 27.8166 29.482 25.7624V15.8432C29.482 13.7889 27.8167 12.1235 25.7624 12.1235H15.8432ZM26.8331 15.8486C26.8331 16.4403 26.3534 16.92 25.7617 16.92C25.17 16.92 24.6903 16.4403 24.6903 15.8486C24.6903 15.2569 25.17 14.7772 25.7617 14.7772C26.3534 14.7772 26.8331 15.2569 26.8331 15.8486ZM20.803 17.8312C19.1619 17.8312 17.8315 19.1616 17.8315 20.8027C17.8315 22.4438 19.1619 23.7742 20.803 23.7742C22.4441 23.7742 23.7745 22.4438 23.7745 20.8027C23.7745 19.1616 22.4441 17.8312 20.803 17.8312ZM16.4029 20.8027C16.4029 18.3726 18.3729 16.4026 20.803 16.4026C23.2331 16.4026 25.2031 18.3726 25.2031 20.8027C25.2031 23.2328 23.2331 25.2028 20.803 25.2028C18.3729 25.2028 16.4029 23.2328 16.4029 20.8027Z" fill="#E9F5FC"/>
          <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_111_275)" stroke-opacity="0.4" stroke-width="2"/>
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
          <rect width="41" height="41" rx="10" fill="url(#paint0_linear_111_301)"/>
          <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_111_301)" stroke-opacity="0.4" stroke-width="2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8432 12.1235C13.7889 12.1235 12.1236 13.7889 12.1236 15.8432V25.7624C12.1236 27.8166 13.7889 29.4821 15.8432 29.4821H25.7624C27.8167 29.4821 29.482 27.8166 29.482 25.7624V15.8432C29.482 13.7889 27.8167 12.1235 25.7624 12.1235H15.8432ZM26.8331 15.8486C26.8331 16.4403 26.3534 16.92 25.7617 16.92C25.17 16.92 24.6903 16.4403 24.6903 15.8486C24.6903 15.2569 25.17 14.7772 25.7617 14.7772C26.3534 14.7772 26.8331 15.2569 26.8331 15.8486ZM20.803 17.8312C19.1619 17.8312 17.8315 19.1616 17.8315 20.8027C17.8315 22.4438 19.1619 23.7742 20.803 23.7742C22.4441 23.7742 23.7745 22.4438 23.7745 20.8027C23.7745 19.1616 22.4441 17.8312 20.803 17.8312ZM16.4029 20.8027C16.4029 18.3726 18.3729 16.4026 20.803 16.4026C23.2331 16.4026 25.2031 18.3726 25.2031 20.8027C25.2031 23.2328 23.2331 25.2028 20.803 25.2028C18.3729 25.2028 16.4029 23.2328 16.4029 20.8027Z" fill="#E9F5FC"/>
          <defs>
          <linearGradient id="paint0_linear_111_301" x1="20.516" y1="0" x2="20.516" y2="41" gradientUnits="userSpaceOnUse">
          <stop stop-color="#13141C"/>
          <stop offset="1" stop-color="#000001" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_111_301" x1="20.5" y1="0" x2="20.5" y2="41" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E9F5FC" stop-opacity="0.42"/>
          <stop offset="1" stop-color="#575757" stop-opacity="0.22"/>
          </linearGradient>
          </defs>
        </svg>
        )
      }





    </a>


    
  )
}

export default InstagramIcon