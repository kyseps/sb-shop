import React from 'react';
import styled from "styled-components";

const StyledDescription = styled.div`
  box-sizing: border-box;
  border-radius: 30px;
  border: double 2px transparent;
  background-image: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), 
                    linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Heading = styled.h1`
  font-family: black;
  font-weight: 900;
  font-size: 18px;
  line-height: 32px;
  color: #E9F5FC;
`;

interface DescriptionProps {
  Data: {
    data: {
      details: {
        description: string;
      };
    };
  };
}

const Description: React.FC<DescriptionProps> = ({ Data }) => {

  const _defaultDescription = `
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

  `;
const description = Data?.data?.details?.description || _defaultDescription;
  return (
    <StyledDescription>
      <div className="w-5/6 m-auto my-14">
        <Heading>توضیحات</Heading>
        {/* Render the HTML content */}
        <div 
          dangerouslySetInnerHTML={{ __html: description }} 
          style={{ color: 'rgba(233, 245, 252, 0.6)', textAlign: 'justify' }} // Add styles as needed
        />
      </div>
    </StyledDescription>
  );
};

export default Description;
