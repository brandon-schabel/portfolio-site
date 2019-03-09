import styled from 'styled-components'
import { string } from 'prop-types'
import media from '../mediaQueries'

const FlexWrapper = styled.div`
  display: flex;

  width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : "100%")};
  height: ${({ mobileHeight }) => (mobileHeight ? mobileHeight : "250px")};
  align-items: ${({ mobileAlignItems }) =>
    mobileAlignItems ? mobileAlignItems : "center"};
  flex-direction: ${({ mobileFlexDirection }) =>
    mobileFlexDirection ? mobileFlexDirection : "column"};
  justify-content: ${({ mobileJustifyContent }) =>
    mobileJustifyContent ? mobileJustifyContent : "center"};

  margin-top: ${({marginTop}) => marginTop ? marginTop : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '0px'};

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

FlexWrapper.propTypes = {
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

export default FlexWrapper;