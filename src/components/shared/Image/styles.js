import styled from "styled-components"
import media from "../mediaQueries"
export const StyledImage = styled.img`
  height: ${({ mobileHeight }) => (mobileHeight ? mobileHeight : "100px")};
  width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : "100px")};

  ${media.tablet`
    height: ${({ tabletHeight }) => (tabletHeight ? tabletHeight : "100px")};
    width: ${({ tabletWidth }) => (tabletWidth ? tabletWidth : "100px")};
  `}

  ${media.desktop`
    height: ${({ desktopHeight }) => (desktopHeight ? desktopHeight : "100px")};
    width: ${({ desktopWidth }) => (desktopWidth ? desktopWidth : "100px")};
  `}
`
