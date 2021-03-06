import styled from "styled-components"
import media from "../mediaQueries"
import { string } from 'prop-types'

export const StyledSection = styled.section`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  display: flex;

  width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : "100%")};
  height: ${({ mobileHeight }) => (mobileHeight ? mobileHeight : "250px")};
  align-items: ${({ mobileAlignItems }) =>
    mobileAlignItems ? mobileAlignItems : "center"};
  flex-direction: ${({ mobileFlexDirection }) =>
    mobileFlexDirection ? mobileFlexDirection : "column"};
  justify-content: ${({ mobileJustifyContent }) =>
    mobileJustifyContent ? mobileJustifyContent : "center"};

  ${media.tablet`
  width: ${({ tabletWidth }) => (tabletWidth ? tabletWidth : "100%")};
    height: ${({ tabletHeight }) => (tabletHeight ? tabletHeight : "250px")};
    align-items: ${({ tabletlignItems }) =>
      tabletlignItems ? tabletlignItems : "center"};
    flex-direction: ${({ tabletFlexDirection }) =>
      tabletFlexDirection ? tabletFlexDirection : "column"};
    justify-content: ${({ tabletJustifyContent }) =>
      tabletJustifyContent ? tabletJustifyContent : "center"};
  `}

  ${media.desktop`
  width: ${({ desktopWidth }) => (desktopWidth ? desktopWidth : "100%")};
    height: ${({ desktopHeight }) => (desktopHeight ? desktopHeight : "250px")};
    align-items: ${({ desktopAlignItems }) =>
      desktopAlignItems ? desktopAlignItems : "center"};
    flex-direction: ${({ desktopFlexDirection }) =>
      desktopFlexDirection ? desktopFlexDirection : "column"};
    justify-content: ${({ desktopJustifyContent }) =>
      desktopJustifyContent ? desktopJustifyContent : "center"};
  `}
`

StyledSection.propTypes = {
  alignItemsMobile: string,
  alignItemsTablet: string,
  alignItemsDesktop: string,

  mobileFlexDirection: string,
  tabletFlexDirection: string,
  desktopFlexDirection: string,

  mobileJustifyContent: string,
  tabletJustifyContent: string,
  desktopJustifyContent: string,

  mobileWidth: string,
  tabletWidth: string,
  desktopWidth: string,
  
  mobileHeight: string,
  tabletHeight: string,
  desktopHeight: string
}