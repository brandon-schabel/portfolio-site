import styled from 'styled-components'

const SimpleFlex = styled.div`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'column'}
`