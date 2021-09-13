import React from 'react'
import { Link } from "gatsby"
import {ContainerDiv} from '../styles/components/MoreInformation'


const MoreInformation = () => {
        return(
                <ContainerDiv>
                    <p>I am a talented and hardworking individual, with broad skills in Create Web Application. Furthermore, I am adept at handling multiple tasks on a daily basis competently and at work well under pressure. A key strength is communication; building strong relationships with people in order to deliver the best results.</p>
                    <Link to='../CV/David-Arevalo_CV.pdf' download target="_blank">Download my CV</Link>
              </ContainerDiv>
        )
}
export default MoreInformation