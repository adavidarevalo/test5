import styled from "@emotion/styled"

export const Container = styled.section`
min-height: 66.4vh;
width: 80%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 75vh;
img{
    width: 100%;
    max-width: 350px;
    margin-top: 15px;
}
p{
    font-size: 2rem;
    color: rgb(69,16,138);
    font-family: 'Ubuntu', sans-serif;
    font-weight: 600;
    letter-spacing: 4px;
}
@media (min-width: 800px){
    display: flex;
    flex-direction: inherit;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    p{
        margin-left: 25px;
    }
}
`