import styled from "styled-components"
import ItemCards from "./ItemCards"
import  { useEffect, useState } from "react";
import ArrowLeftIcon from "@/shared/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";

import 'react-multi-carousel/lib/styles.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel-V1.css";

const StyledItemCardsBox = styled.div`


position: absolute;
width: 100%;



margin-right : 420px;
margin-top : 310px;
`




function ItemCardsbox() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);



  async function fetchData() {
    try {
      const response = await fetch('http://5.178.111.119:8000/');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData.products);
        
      } else {
        console.log('Error: ' + response.status);
      }
    } catch (error) {
      console.log('Error: ');
    }
  }

  console.log(data)
  return (
    <>
      <StyledItemCardsBox>
        {/* Navigation Buttons */}
        <div className="flex flex-row gap-5 mb-2 ml-32">
          {/* Left Arrow */}
          <button>
            <ArrowLeftIcon />
          </button>
          {/* Right Arrow */}
          <button>
            <ArrowRightIcon />
          </button>
        </div>

        <ul className="flex flex-row gap-5" dir="rtl">
          {data.length > 0 ? (
            data.map((item, index) => (
              <ItemCards key={index}  DataObject={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>

        
      </StyledItemCardsBox>
    </>
  );
}

export default ItemCardsbox;