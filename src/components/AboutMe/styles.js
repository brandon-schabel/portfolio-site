import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
  padding-left: ${({paddingLeft}) => paddingLeft ? paddingLeft : '0px'};
  padding-right: ${({paddingRight}) => paddingRight ? paddingRight : '0px'};
  box-sizing: border-box;
`

export const StyledA = styled.a`
    cursor: pointer;
`