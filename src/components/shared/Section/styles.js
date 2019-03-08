import styled from 'styled-components'
import media from '../mediaQueries'

export const StyledSection = styled.section`
  height: 200px;
  width: 100%;

  ${media.desktop`
    background-color: red;
  `}

`