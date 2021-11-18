import styled from '@emotion/styled'

export const ButtonProject = styled.div`
button{
  border: none;
  position: fixed;
  right: -25vw;
  bottom: 40%;
  background: #5f27bd;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  z-index: 100;
  transition: all 1s ease;
  &.Active{
    right: 5%;
  }
  &:hover{
    background: #431d82;
  }
  svg{
      color: white;
  }
}
@media (min-width: 900px){
  button{
    bottom: 27%;
  }
}
`
export const ElementContainer = styled.div`
max-width: 600px;
`