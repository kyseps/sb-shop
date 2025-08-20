import { useState } from 'react'
import AccordionItem from './AccordionItem';
import styled from 'styled-components';



const faqs = [
  {
    title: "بهتر است اکانتمان در کدام ریجن استیم باشد؟",
    text:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    h :["k" ,  "f" , "ld"]
  },
  {
    title: "بهتر است اکانتمان در کدام ریجن استیم باشد؟",
    text:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
  },
  {
    title: "بهتر است اکانتمان در کدام ریجن استیم باشد؟",
    text:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
  },
  {
    title: "بهتر است اکانتمان در کدام ریجن استیم باشد؟",
    text:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
  },
  
];


const Container = styled.div`
// border : 1px solid red;
width: 700px;
margin: 50px auto;
display: flex;
flex-direction: column;
gap: 20px;
`
const Accordion = () => {

  const data = faqs;
  const [curOpen , setCurOpen] = useState(1);

  return (
    <Container>
      {data.map((el,i) => (
        <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title={el.title}
        num={i}
        key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </Container>
  )
}

export default Accordion