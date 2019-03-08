import styled from 'styled-components'
import media from '../mediaQueries'

export const StyledSection = styled.section`
  height: ${({height}) => height ? height : '200px'};
  width: 100%;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'white'};
  display: flex;
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'column'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
  /* ${media.desktop`
    background-color: red;
  `} */

`