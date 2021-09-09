import React from 'react'

import styled from "@emotion/styled"

const Button = styled.input`
padding: 4px 15px;
border-radius: 5px;
border: none;
font-size: 1.3rem;
margin: 10px;
background: #067eff;
color: white;
font-weight: 600;
letter-spacing: 2px;
text-align: center;
font-family: 'Ubuntu', sans-serif;
&:hover{
    background: #5f27bd;
}
`

const ButtonSelect = ({name, item}) =>{
    console.log("item ",item)
    console.log("name ",name)

    const test =(e)=>{
        let hola = e
        console.log(item.hola)
    }
    return(
        <Button
        type="submit"
        value={name}
        name={name}
        className={item.name && "SelectBackground"}
        onClick={(e)=>{
            /* handleClick(e), */
            test(name)
          }}
        />
    )
}

export default ButtonSelect