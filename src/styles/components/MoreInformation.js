import styled from '@emotion/styled'

export const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
max-width: 1300px;
margin: 0 auto;
p{
    margin-block: 25px;
    font-family: 'Ubuntu', sans-serif;
}
div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
a{
    background: #5f27bd;
    color: white;
    width: 280px;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-inline: 10px;
    margin-top: 10px;
    svg{
        margin-left: 1px;
    }
    &:hover{
        background: #431d82;
        box-shadow: 3px 3px 20px 1px rgba(0, 0, 0, 0.2);
    }
}
`