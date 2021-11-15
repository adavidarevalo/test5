import styled from '@emotion/styled'


export const Container = styled.div`
position: absolute;
width: 100%;
height: 93vh;
background: #323639;
overflow: hidden;
background: white;
div{
    background: white;
    min-height: 39vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        max-width: 450px;
        width: 100%;
    }
    a{
        text-decoration: none;
        font-size: 1.2rem;
        line-height: 30px;
        text-align: center;
        color: #424141;
        font-family: 'Ubuntu', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg{
            margin-top: 15px;
            font-size: 3rem;
            color: #424141;
        }
    }
}
`