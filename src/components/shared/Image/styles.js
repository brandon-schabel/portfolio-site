import styled from "styled-components"

export const StyledImage = styled.img`
  height: ${({ height }) => (height ? height : "100px")};
  width: ${({ width }) => (width ? width : "100px")};
  padding-left: ${({paddingLeft}) => paddingLeft ? paddingLeft : '0px'};
  padding-right: ${({paddingRight}) => paddingRight ? paddingRight : '0px'};
  box-sizing: border-box;
  transition: all .2s ease-in;

  &:hover{
    transition: all .2s ease-in-out;
    transform: scale(1.1);
  }

`
