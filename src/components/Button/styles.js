import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;
  background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 14px;
  border: ${props => props.isBack ?  '1px solid #fff' : 'none'};
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img{
    transform: ${props => props.isBack && 'rotatey(180deg)'}
  };

`;
