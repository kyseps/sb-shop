import styled from "styled-components"
import CategoriesIcon from '@/shared/icons/CategoriesIcon'
import { useState } from "react"

const StyledBox = styled.div`
width: 303px;

border-radius: 30px;

/* border */

border : double 2px transparent;
background-image: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;
`

const ContentContainer = styled.div`
width : 90%;
margin : auto;
padding : 2rem;

display : flex;
flex-direction : column;
gap : 30px;
`


const Heading = styled.h1`

font-family: 'Peyda';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;
gap : 8px;

// margin-bottom : 15px;

color: #FFFFFF;
`

const Label = styled.span`

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 246.3%;

color: #FFFFFF;
`

const Number = styled.span`
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 246.3%;
/* or 39px */
display: flex;
align-items: center;
text-align: right;

color: rgba(255, 255, 255, 0.6);


`
const RegionData = [
  {
    title : "استونی",
    number : "2",
    iconSelected : <SelectedCircle/>,
    iconEmpty : <EmptyCircle/>
  },

  {
    title : "اوکراین",
    number : "1",
    iconSelected : <SelectedCircle/>,
    iconEmpty : <EmptyCircle/>
  },

  {
    title : "پرو",
    number : "3",
    iconSelected : <SelectedCircle/>,
    iconEmpty : <EmptyCircle/>
  },

  {
    title : "ژاپن",
    number : "1",
    iconSelected : <SelectedCircle/>,
    iconEmpty : <EmptyCircle/>
  },

  {
    title : "کلمبیا",
    number : "8",
    iconSelected : <SelectedCircle/>,
    iconEmpty : <EmptyCircle/>
  },
]


// const PlatformData = [
//   {
//     title : "وبسایت",
//     number : "2",
//     iconSelected : <SelectedCircle/>,
//     iconEmpty : <EmptyCircle/>
//   },

//   {
//     title : "اپل",
//     number : "1",
//     iconSelected : <SelectedCircle/>,
//     iconEmpty : <EmptyCircle/>
//   },

//   {
//     title : "ویندوز",
//     number : "3",
//     iconSelected : <SelectedCircle/>,
//     iconEmpty : <EmptyCircle/>
//   },

// ]



function RegionAndPlatform() {
  const [selectedRegion , setSelectedRegion] = useState(null);
  // const [selectedPlatform , setSelectedPlatform] = useState(null);

  function handleRegionClick (region : any) {
    setSelectedRegion(region);
  }


  // function handlePlatformClick (platform : any) {
  //   setSelectedPlatform(platform);
  // }

  return (
    <StyledBox>
        <ContentContainer>

      {/* REGION */}
      <div className="flex flex-col gap-2">
            {/* HEADER */}
            <Heading>
                <CategoriesIcon/>
                ریجن
            </Heading>
              
            <div className="flex flex-col gap-1 mt-2">
              {RegionData.map((el , index) => {
                return(
                <div className="flex gap-2 items-center" >
                  
                    <div onClick={() => handleRegionClick(index)}>
                      {selectedRegion === index ? el.iconSelected : el.iconEmpty}
                    </div>

                    <p className="flex gap-1">
                      <Label>{el.title}</Label>
                      <Number>({el.number})</Number>
                    </p>
                </div>
                      )})}
            </div>
          </div>


        {/* PLATFORM */}
        {/* <div className="flex flex-col gap-2">
          <Heading>
              <CategoriesIcon/>
             پلتفرم
          </Heading>

          <div className="flex flex-col gap-1 mt-2">
              {PlatformData.map((el , index) => {
                return(
                <div className="flex gap-2 items-center" >
                  
                    <div onClick={() => handlePlatformClick(index)}>
                      {selectedPlatform === index ? el.iconSelected : el.iconEmpty}
                    </div>

                    <p className="flex gap-1">
                      <Label>{el.title}</Label>
                      <Number>({el.number})</Number>
                    </p>
                </div>
                      )})}
            </div>

        </div> */}


        </ContentContainer>
    </StyledBox>
  )
}

export default RegionAndPlatform


// SVG

function SelectedCircle () {
  return(
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="17" height="17" rx="8.5" fill="#575757" fill-opacity="0.22"/>
<rect x="1" y="1" width="15" height="15" rx="7.5" stroke="url(#paint0_linear_2205_1192)" stroke-opacity="0.4" stroke-width="2"/>
<defs>
<linearGradient id="paint0_linear_2205_1192" x1="8.5" y1="0" x2="8.5" y2="17" gradientUnits="userSpaceOnUse">
<stop stop-color="#E9F5FC" stop-opacity="0.42"/>
<stop offset="1" stop-color="#575757" stop-opacity="0.22"/>
</linearGradient>
</defs>
</svg>
  )
}

function EmptyCircle () {
  return(
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="17" height="17" rx="8.5" fill="url(#paint0_linear_2205_1195)"/>
        <rect x="1" y="1" width="15" height="15" rx="7.5" stroke="url(#paint1_linear_2205_1195)" stroke-opacity="0.4" stroke-width="2"/>
        <defs>
        <linearGradient id="paint0_linear_2205_1195" x1="8.50664" y1="0" x2="8.50664" y2="17" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0.14"/>
        <stop offset="1" stop-color="#000001" stop-opacity="0.21"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2205_1195" x1="8.5" y1="0" x2="8.5" y2="17" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E9F5FC" stop-opacity="0.42"/>
        <stop offset="1" stop-color="#575757" stop-opacity="0.22"/>
        </linearGradient>
        </defs>
  </svg>

  )
}