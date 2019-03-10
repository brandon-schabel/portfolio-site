import styled from 'styled-components'
import media from '../shared/mediaQueries'

export const Line = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid white;
  margin: 1em 0;
  padding: 0;
  width: 50%;

  ${media.desktop`
    width: 30%
  `}
`