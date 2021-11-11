import styled from '@emotion/styled'

export const ModalSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
z-index: 300;
button{
    background: none;
    border: none;
    svg{
        font-size: 2.2rem;
        position: absolute;
        color: #4e4e4e;
        top: 2%;
        right: 2%;
        cursor: pointer;
        &:hover{
            color: #353535;
        }
    }
}
img{
    width: 80%;
    max-width: 500px;
    min-width: 275px;
    min-height: 170px;
}
div{
    h2{
        text-align: center;
    }
    p{
        font-family: 'Ubuntu', sans-serif;
        max-width: 500px;
       text-align: center;
       width: 80%;
       margin: 10px auto;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        max-width: 400px;
        margin: 16px auto;
    }
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        margin: 0px auto;
        margin-bottom: 20px;
        text-decaration: none;
        font-family: 'Ubuntu', sans-serif;
        background: #5f27bd;
        padding: 10px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        text-decoration: none;
        &:hover{
            background: #431d82;
            transform: scale(1.03);
        }
        svg{
            margin-left: 10px;
        }
    }
}
@media (min-width: 1150px){
    flex-direction: inherit;
}
`