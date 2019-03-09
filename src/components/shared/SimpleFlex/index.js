import styled from 'styled-components'

const SimpleFlex = styled.div`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'column'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'unset'};
`
export default SimpleFlex;