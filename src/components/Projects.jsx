import React, {useState, useRef} from "react"
import styled from "@emotion/styled"
import ImageContainer from "./ImageContainer"
import ImageRow from "./ImageRow"
import ButtonSelect from "./ButtonSelect"
import { AiOutlineBars } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';

const Cotainer = styled.div`
h2{
    text-align: center;
    font-size: 2.5rem;
    text-decoration: underline;
    color: #3e3d3d;
}
p{
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
}
div{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
@media (min-width: 900px){
div{
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
}
}
`
const Div = styled.div`
@media (min-width: 900px){
width: 1300px;
margin: 0 auto;
margin-bottom: 50px;width: 1300px;
margin: 0 auto;
margin-bottom: 50px; 
}
`



const languages = ["HTML", "CSS", "SASS", "LESS", "JavaScript", "REACT", "NextJs", "Gatsby", "WEBPACK", "JEST", "FullStack", "Travis Cli", "Node JS", "Mongo DB"]
const Projects =() =>{
    const [item, setItem] = useState({
        "HTML": false,
        "CSS": false, 
        "SASS": false, 
        "LESS": false, 
        "JavaScript": false,    
        "REACT": false, 
        "NextJs": false,
        "Gatsby": false,
        "WEBPACK": false, 
        "JEST": false
    })
    const handleClick = e => {
        e.preventDefault()
        setItem({
            ...item,
            [e.target.name]: true
        })
    }
    const test = (e) => {
        console.log(e)
    }
    const [galery, setGalery] = useState(false)

    const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log(inView)
  const ButtonProject = styled.div`
  display: ${inView ? "block" : "none"} !important;
  button{
    border: none;
    position: fixed;
    right: 5%;
    bottom: 5%;
    background: #5f27bd;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    svg{
        color: white;
    }
  }
`
    return(
        <Cotainer ref={ref}>
            <h2>Projects</h2>
            <ButtonProject>
              <button
              onClick={()=>setGalery(!galery)}
              >{galery ?<AiOutlineBars/> : <BsFillGrid3X3GapFill/> }</button>
            </ButtonProject>
            <p>My Skills</p>
            <Div>
            {languages.map(items => (       
                  <ButtonSelect name={items} item={item}/>
            ))}
            </Div>
            <div>
              {galery 
              ?languages.map(item=>(
                    <ImageContainer name={item}/>
                ))
              :languages.map(item=>(
                    <ImageRow name={item}/>
                )) 
            }
            </div>
        </Cotainer>
    )
}

export default Projects