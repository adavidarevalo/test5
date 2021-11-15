import { keyframes } from '@emotion/react';
import styled from '@emotion/styled'
import DeveloperBackground from '../../images/DeveloperBackground.jpeg'

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const Container = styled.section`
min-height: 75vh;
background-image: url(${DeveloperBackground});
background-position: center;
background-size: cover;
.Element-Container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
    background: #2e2e2e2e;
    height: 100%;
    padding-block: 30px;
}
.Container-Form{
    background: #ffffffa1;
    border-radius: 5px;
    border: 1px solid rgb(103 0 167);
    box-shadow: 13px 16px 20px 5px #00000085;
    width: 90%;
    max-width: 500px;
    animation: ${fadeIn} 1s both;
    h3{
        color: white;
        background: black;
        padding: 20px;
        text-align: center;
        line-height: 27px;
    }
    form{
        padding-inline: 25px;
        label{
            font-size: 1.1rem;
            display: block;
            font-weight: 600;
            margin-bottom: 3px;
            font-family: 'Ubuntu',sans-serif;
        }
        input,
        textarea{
            width: 100%;
            outline: none;
            padding: 5px 10px;
            font-family: 'Ubuntu',sans-serif;
        }
        div{
            margin-bottom: 20px;
        }
        .Send{
            max-width: 125px;
            font-size: 1.1rem;
            padding: 5px 10px;
        }
        .Msg{
            width: 100%;
            color: white;
            background: #46d346;
            padding: 5px;
            letter-spacing: 2px;
            font-weight: 600;
            margin: 0px;
            min-height: 35px;
            height: auto;
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Ubuntu',sans-serif;
            p{
                margin: 0px;
            }
            &.Error{
                opacity: 1;
                background: #ff0000d9;
            }
            &.True{
                opacity: 1;
            }
        }
        .ValidatorElement{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            input{
                background: #5f27bd;
                color: white;
                width: 240px;
                padding: 10px;
                border-radius: 10px;
                font-size: 1.2rem;
                text-align: center;
                font-family: 'Ubuntu',sans-serif;
                border: none;
                cursor: pointer;
                &:hover,
                &:active{
                    background: #381474;
                }
            }
        }
    }
}
`

