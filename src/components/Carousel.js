import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;
const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px )`}; // (*)
img {
    width: 100%;
    height: 100%;
  }
`;
function Carousel({
    images,
    setWidth,
    xPosition,
}) {
    const slideRef = useRef();
    useEffect(() => {
        if (slideRef.current) {
            const width = slideRef.current.clientWidth;
            setWidth(width);
        }
    }, [setWidth]);
    return (
        <Wrapper>
            <Slide xPosition={xPosition} ref={slideRef}>
                {images.Templates.map((img) => (
                    <img src={img.src} alt={img.alt} key={img.id} />
                ))}
            </Slide>
            
        </Wrapper>
    );
}
export default Carousel;