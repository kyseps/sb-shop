import styled from 'styled-components'
import CategoriesIcon from '@/shared/icons/CategoriesIcon'
import ArrowUpIcon from '@/shared/icons/ArrowUpIcon'
import ArrowDownIconWhite from '@/shared/icons/ArrowDownIconWhite'
import { Link } from 'react-router-dom'



const StyledCategories = styled.div`
width: 303px;
// height: 406px;


/* item-list-bg */
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

// border : 1px solid red;
display : flex;
flex-direction : column;
gap : 15px;
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


color: #FFFFFF;
`

const MenuLabel = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
//   height: 50px;

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 246.3%;
/* or 39px */
display: flex;
align-items: center;
text-align: right;

color: #FFFFFF;


  &:hover {
    cursor: pointer;
  }
`
// const SubMenuLabel = styled.span`
//   margin-right: 16px;
// `;

// const DropdownLink = styled(Link)`
//     display: flex;

//     font-family: 'Peyda';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 257%;
//     /* or 36px */
//     text-align: right;

//     color: rgba(255, 255, 255, 0.6);

//     &:hover {
//         cursor: pointer;
//     }
// `;


function Categories () {

    return(
      <StyledCategories>
        <ContentContainer>

            {/* HEADER */}
              <Heading>
                <CategoriesIcon/>
                 دسته بندی ها
              </Heading>

            {/* MENU */}
                <Menu/>
  
        </ContentContainer>
      </StyledCategories>
    )
  }
  
export default   Categories

// MAIN MENU
function Menu () {
    return(
    <div>
        {Data.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
    </div>
    )
}

// SUB MENU
function SubMenu ({item} : any) {
    // const [subnav , setSubnav] = useState(false);
    // const showSubnav = () => setSubnav(!subnav);
    return(
        <>
        <div className=' mb-2'>
        <MenuLabel to={item.path} >
          <div>
            {item.title}
          </div>
          {/* <div>
              {item.subMenu && subnav
                ? item.iconOpend
                : item.subMenu
                ? item.iconClosed
                : null}
            </div>    */}
        </MenuLabel>
                </div>


        {/* { subnav &&
        item.subMenu.map ((i : any) => {
          return(
            <DropdownLink to={i.path}>
              <SubMenuLabel> {i.title}</SubMenuLabel> 
              </DropdownLink>
          );
    
        })} */}
    
       </>
    )
}


const Data = [
    {title: "بازی های اورجینال",
      path : "",
      iconClosed : <ArrowDownIconWhite/>,
      iconOpend : <ArrowUpIcon/>,
      subMenu : [
            {title : "بازی های بتل", path : "/"},
            {title : "بازی های یوبی سافت", path : "/"},
            {title : "بازی های پلی استیشن", path : "/"},
            {title : "بازی های ایکس باکس", path : "/"},
          ]
    },
    {title: "گیم پوینت",
      path : "",
      iconClosed : <ArrowDownIconWhite/>,
      iconOpend : <ArrowUpIcon/>,
      subMenu : [
        {title : "گیم پوینت" , path :"/"},
        {title : "گیم پوینت" , path :"/"},
        {title : "گیم پوینت" , path :"/"},
        {title : "گیم پوینت" , path :"/"},
      ]
    
    },
  
    {title: "گیفت کارت",
      path : "",
      iconClosed : <ArrowDownIconWhite/>,
      iconOpend : <ArrowUpIcon/>,
     
    },
  
    {title: "سرویس بوستینگ",
      path : "",
      iconClosed : <ArrowDownIconWhite/>,
      iconOpend : <ArrowUpIcon/>,
      subMenu : [
        {title : "سرویس بوستینگ" , path :"/"},
        {title : "سرویس بوستینگ" , path :"/"},
        {title : "سرویس بوستینگ" , path :"/"},

      ]
   
    },
  ]


  