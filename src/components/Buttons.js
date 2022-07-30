import React from 'react';
import styled from 'styled-components';
import leftBtn from '../icons/left.png'; // Svg Icon
import rightBtn from '../icons/right.png';  // Svg Icon
const Button = styled.img`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  width: 5%;
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
`;
function Buttons({ handleClickPrev, handleClicknext }) {
  return (
    <>
      <Button src={leftBtn} side="prev" onClick={handleClickPrev} />
      <Button src={rightBtn} side="next" onClick={handleClicknext} />
    </>
  );
}
export default Buttons;