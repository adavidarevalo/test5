import styled from "@emotion/styled"

export const Button = styled.input`
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
cursor: pointer;
&:active,
&:hover{
    background: #5f27bd;
}
`