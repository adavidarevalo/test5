import React from 'react'
import { Link } from "gatsby"
import {ContainerDiv} from '../styles/components/MoreInformation'
import CV from "../CV/CV.pdf"

const MoreInformation = () => {
        return(
                <ContainerDiv>
                    <p>I am a talented and hardworking individual, with broad skills in Create Web Application. Furthermore, I am adept at handling multiple tasks on a daily basis competently and at work well under pressure. A key strength is communication; building strong relationships with people in order to deliver the best results.</p>
                    <a href="../CV/CV.pdf"  download="David-Arevalo-CV.pdf">Download</a>
              </ContainerDiv>
        )
}
export default MoreInformation