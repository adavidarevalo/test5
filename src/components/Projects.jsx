import React, {useState} from "react"
import styled from "@emotion/styled"
import ImageContainer from "./ImageContainer"
import ButtonSelect from "./ButtonSelect"

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
    return(
        <Cotainer>
            <h2>Projects</h2>
            <p>My Skills</p>
            <div>
            {languages.map(items => (       
                  <ButtonSelect name={items} item={item}/>
            ))}
            </div>
            <div>
                {languages.map(item=>(
                    <ImageContainer name={item}/>
                ))}
            </div>
        </Cotainer>
    )
}

export default Projects