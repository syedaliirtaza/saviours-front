import React, { useState, useEffect } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./Faq.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 65em;
  background: #0E0F16;
  @media (max-width: 1280px) {
    height: 70em;
  }
  @media (max-width: 780px) {
    height: 65em;
  }
  @media (max-width: 480px) {
    height: 75em;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 80em;
  @media (max-width: 1280px) {
    width: 70em
  }
  @media (max-width: 780px) {
    width: 30em
  }
  @media (max-width: 480px) {
    width: 20em
  }
`;

const Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #7BFABA;
  p {
    font-size: 1rem;
  }
`;


const Faq = () => {
  const [clicked, setClicked] = useState(false);
  
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
      <div className='FaqHeading'>
        <h1 data-aos="fade-up">FAQs</h1>
      </div>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Faq;