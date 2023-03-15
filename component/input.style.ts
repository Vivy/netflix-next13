import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  border-radius: 6px;
  padding: 24px;
  padding-bottom: 4px;
  width: 100%;
  color: white;
  background-color: rgb(64, 64, 64);
  appearance: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 14px;
  line-height: 20px;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 14px;
  line-height: 20px;
  color: rgb(161, 161, 170);
  transition-duration: 150;
  transform: translateY(-12px);
  transform: translate(0.75);
  top: 16px;
  z-index: 10;
  transform-origin: 0;
  left: 24px;
`;
