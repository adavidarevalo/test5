import styled from '@emotion/styled'

export const Container = styled.section`
position: relative;
display: flex;
video{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
}
div{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: #fbfbfb94;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h2{
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2rem;
        text-align: center;
    }
    a{
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 15px;
        border-radius: 5px;
        letter-spacing: 1px;
        font-weight: 600;
        color: black;
        border: 0.1px solid black;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        transition: all .5s ease;
        &:hover,
        &:active{
            background: black;
            color: white;
        }
    }
}
`