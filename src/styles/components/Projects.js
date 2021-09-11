import styled from "@emotion/styled"

export const Cotainer = styled.div`
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
export const Div = styled.div`
@media (min-width: 900px){
width: 1300px;
margin: 0 auto;
margin-bottom: 50px;width: 1300px;
margin: 0 auto;
margin-bottom: 50px; 
}
`
