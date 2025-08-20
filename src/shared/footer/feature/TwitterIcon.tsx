import { useState } from "react";


type Props = {
  href : string
}

function TwitterIcon({href} : Props) {


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
        <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_111_275)" stroke-opacity="0.4" stroke-width="2"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1067 12.6618C24.9669 12.1826 27.2119 12.8431 28.5781 14.2982H30.1117C30.3576 14.2982 30.586 14.4245 30.7167 14.6327C30.8474 14.8409 30.8619 15.1016 30.755 15.323L29.247 18.4465C29.6749 22.0861 28.2511 25.5659 25.3873 27.623C22.4577 29.7273 18.1479 30.2574 13.0376 28.1636C12.7687 28.0623 12.5364 27.8823 12.3713 27.6467C12.2029 27.4064 12.1126 27.1201 12.1126 26.8267C12.1126 26.5333 12.2029 26.247 12.3713 26.0069C12.5397 25.7666 12.778 25.584 13.0537 25.4839C13.0724 25.4771 13.0913 25.4711 13.1105 25.4659C13.8964 25.2528 14.6478 24.934 15.3447 24.5196C13.964 23.69 12.8363 22.4843 12.1012 21.0323C11.1834 19.2193 10.9374 17.1405 11.4058 15.1644C11.4356 14.9168 11.5297 14.6809 11.6794 14.4805C11.8427 14.2617 12.0653 14.0943 12.3208 13.9981C12.5764 13.9019 12.8542 13.8809 13.1212 13.9377C13.3881 13.9944 13.6331 14.1263 13.8273 14.3179C15.8451 16.3012 17.6106 17.122 18.833 17.4576C19.3069 17.5877 19.7036 17.6461 20.0072 17.6697C19.9131 16.4121 20.1273 15.3641 20.6013 14.5353C21.1789 13.5253 22.0968 12.922 23.1067 12.6618Z" fill="#E9F5FC"/>
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
          <rect width="41" height="41" rx="10" fill="url(#paint0_linear_111_289)"/>
          <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_111_289)" stroke-opacity="0.4" stroke-width="2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1067 12.6618C24.9669 12.1826 27.2119 12.8431 28.5781 14.2982H30.1117C30.3576 14.2982 30.586 14.4245 30.7167 14.6327C30.8474 14.8409 30.8619 15.1016 30.755 15.323L29.247 18.4465C29.6749 22.0861 28.2511 25.5659 25.3873 27.623C22.4577 29.7273 18.1479 30.2574 13.0376 28.1636C12.7687 28.0623 12.5364 27.8823 12.3713 27.6467C12.2029 27.4064 12.1126 27.1201 12.1126 26.8267C12.1126 26.5333 12.2029 26.247 12.3713 26.0069C12.5397 25.7666 12.778 25.584 13.0537 25.4839C13.0724 25.4771 13.0913 25.4711 13.1105 25.4659C13.8964 25.2528 14.6478 24.934 15.3447 24.5196C13.964 23.69 12.8363 22.4843 12.1012 21.0323C11.1834 19.2193 10.9374 17.1405 11.4058 15.1644C11.4356 14.9168 11.5297 14.6809 11.6794 14.4805C11.8427 14.2617 12.0653 14.0943 12.3208 13.9981C12.5764 13.9019 12.8542 13.8809 13.1212 13.9377C13.3881 13.9944 13.6331 14.1263 13.8273 14.3179C15.8451 16.3012 17.6106 17.122 18.833 17.4576C19.3069 17.5877 19.7036 17.6461 20.0072 17.6697C19.9131 16.4121 20.1273 15.3641 20.6013 14.5353C21.1789 13.5253 22.0968 12.922 23.1067 12.6618Z" fill="#E9F5FC"/>
          <defs>
          <linearGradient id="paint0_linear_111_289" x1="20.516" y1="0" x2="20.516" y2="41" gradientUnits="userSpaceOnUse">
          <stop stop-color="#13141C"/>
          <stop offset="1" stop-color="#000001" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_111_289" x1="20.5" y1="0" x2="20.5" y2="41" gradientUnits="userSpaceOnUse">
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

export default TwitterIcon