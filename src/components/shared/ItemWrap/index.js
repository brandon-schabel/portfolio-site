import styled from 'styled-components'

const ItemWrap = styled.div`
  margin-top: ${({marginTop}) => marginTop ? marginTop : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '0px'};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'column'}
`

export default ItemWrap