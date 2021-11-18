import React from 'react'
import { Link } from "gatsby"
import {ContainerDiv} from '../../styles/components/MoreInformation'
import { AiOutlineCloudDownload, AiFillEye } from "react-icons/ai";
import MyCv from '../../fileDownload/MyCv.pdf'

const MoreInformation = () => {
        return(
                <ContainerDiv>
                    <p>I am a talented and hardworking individual, with broad skills in Create Web Application. Furthermore, I am adept at handling multiple tasks on a daily basis competently and at work well under pressure. A key strength is communication; building strong relationships with people in order to deliver the best results.</p>
                    <div>
                    <a href={MyCv}  download='David-Arevalo-Cv.pdf' target="_blank">Download my CV <AiOutlineCloudDownload/></a>
                    <Link to='/Pdf'>See my CV online <AiFillEye/></Link>
                    </div>
              </ContainerDiv>
        )
}
export default MoreInformation