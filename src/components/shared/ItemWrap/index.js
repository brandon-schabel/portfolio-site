import styled from 'styled-components'

const ItemWrap = styled.div`
  margin-top: ${({marginTop}) => marginTop ? marginTop : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '0px'};
  width: ${({width}) => width ? width : '100%'};
  height: ${({height}) => height ? height : '100%'};
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'column'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'unset'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'unset'};
`

export default ItemWrap