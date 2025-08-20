import styled from 'styled-components'
import Categories from './Categories'
import RegionAndPlatform from './RegionAndPlatform'


const StyledSideBar = styled.section`
flex-basis : 25%;
`


export default function SideBar() {
  return (
    <StyledSideBar>

      <div className='flex flex-col gap-5'>
        <Categories/>
        <RegionAndPlatform/>
      </div>

    </StyledSideBar>
  )
}


