import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`


export const Animation = `animation: ${fadeIn} 1s both;`
export const AnimationLeft = `animation: ${fadeInLeft} 1s both;`
export const AnimationRight = `animation: ${fadeInRight} 1s both;`