import styled from "@emotion/styled"

export const Button = styled.input`
padding: 4px 15px;
border-radius: 5px;
border: none;
font-size: 1.3rem;
margin: 10px;
font-weight: 600;
letter-spacing: 2px;
text-align: center;
font-family: 'Ubuntu', sans-serif;
cursor: pointer;
background: none;
border: 1px solid #5f27bd;
color: #391576;
transition: all .4s ease;
&.Active{
    background: #5f27bd;
    color: white;
}
&:active,
&:hover{
    background: #5f27bd;
    color: white;
}
`