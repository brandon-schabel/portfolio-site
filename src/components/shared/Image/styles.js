import styled from "styled-components"

export const StyledImage = styled.img`
  height: ${({ height }) => (height ? height : "100px")};
  width: ${({ width }) => (width ? width : "100px")};

`
