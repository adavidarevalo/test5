import styled from '@emotion/styled'

export const ContainerFooter = styled.footer`
width: 100%;
background: #333333;
padding: 15px 0px;
font-family: 'Ubuntu', sans-serif;
color: white;
div{
  width: 80%;
  margin: 0 auto;
} 
p{
    text-align: center;
    margin: 0px;
    color: white;
}
` 
export const List = styled.div` 
width: 100% !important;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
ul{
    list-style: none;
    li{
      font-size: 1.2rem;
      a{
        color: white;
        text-decoration: none;
        &:hover{
          color: #d2d2d2;
        }
        svg{
          font-size: 1.4rem;
          color: white;
          &:hover{
            color: #d2d2d2;
          }
        }
      }
    }
}
@media (max-width: 600px){
  ul{
    text-align: center;
  }
  .SocialContainer{
    display: flex;
    width: 200px;
    margin: 0px auto 20px;
    justify-content: space-around;
  }
}
@media (min-width: 900px){
  ul{
    display: flex;
    justify-content: space-between;
    width: 215px;
    li:nth-child(2){
      margin-inline: 20px;
    }
  }
}
  .NavLinks{
    width: 400px;
  }
` 