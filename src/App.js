import React, { useState } from 'react';
import Carousel from './components/Carousel';
import styled from 'styled-components';

import Buttons from './components/Buttons';
import CertiTemplate from './data/CertiTemplate.json'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
`;

const SubWrapper = styled.div`
width: 50%;
margin: auto;
overflow: hidden;
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;

const App = () => {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);

    const images = CertiTemplate
    console.log(images)

    const handleClickPrev = () => {
        if (index === 0) return;
        setIndex(index - 1);
        setXPosition(xPosition + width);
    };

    const handleClicknext = () => {
        if (index === images.length - 1) {
            setIndex(0);
            setXPosition(0);
        } else {
            setIndex(index + 1);
            setXPosition(xPosition - width);
        }
    };
    return (
        <Wrapper className="App">
            <SubWrapper>
                <Carousel
                    images={images}
                    setWidth={setWidth}
                    xPosition={xPosition}
                />
                <Buttons
                    handleClickPrev={handleClickPrev}
                    handleClicknext={handleClicknext}
                />
            </SubWrapper>
        </Wrapper>
    );
}

export default App