import styled from '@emotion/styled'

export const ContainerSection = styled.section`
h2{
    text-align: center;
    font-size: 2rem;
    margin-block: 25px 50px;
}
div{
    max-width: 1130px;
    width: 80%;
    margin: 0 auto;
}
@media (min-width: 900px){
    div{
        display: flex;
        flex-wrap: wrap;
    }
}
`