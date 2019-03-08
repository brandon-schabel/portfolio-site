import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'column'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
  width: ${({width}) => width ? width : '100%'};
  height: ${({height}) => height ? height : '100%'};
` 

export default FlexWrapper;