import React from 'react'
import { Link } from "gatsby"
import {ContainerDiv} from '../styles/components/MoreInformation'


const MoreInformation = () => {
        return(
                <ContainerDiv>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta itaque vero optio, ratione quibusdam cupiditate tenetur! Optio libero, velit exercitationem quidem molestias inventore itaque ut omnis dolorem consequatur maiores!</p>
                    <Link to='../CV/David-Arevalo_CV.pdf' download='David-Arevalo_CV.pdf'>Download my CV</Link>
              </ContainerDiv>
        )
}
export default MoreInformation