import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"
import { AiFillFacebook,  AiFillGithub, AiFillMail} from "react-icons/ai";

const ContainerFooter = styled.footer`
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
const List = styled.div` 
width: 100% !important;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
ul{
    list-style: none;
    li{
      font-size: 1.2rem;
      a{
        font-size: 1.4rem;
      }
    }
}
@media (min-width: 900px){
  ul{
    display: flex;
    li:nth-child(2){
      margin-inline: 20px;
    }
  }
}
` 
const Footer = () => {
    //year
    var date = new Date()
    var year = date.getFullYear();
    return(
        <ContainerFooter>
            <div>
                <List>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portafolio</li>
                    </ul>
                    <ul>
                        <li>
                            <Link>
                              <AiFillFacebook/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                              <AiFillGithub/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                              <AiFillMail/>
                            </Link>
                        </li>
                    </ul>
                </List>
              <p>Copyright &#169; {year} creado por <a>David Arevalo</a></p>
            </div>
        </ContainerFooter>
    )
}

export default Footer