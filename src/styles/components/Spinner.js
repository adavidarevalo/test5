import styled from "@emotion/styled"
import {keyframes } from "@emotion/react"

const Animation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

export const LdsGrid = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
div{
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #5f27bd;
  animation: ${Animation} 1.2s linear infinite;
  }
div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
`

export const Container = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0px;
z-index: 10000;
background: white;
overflow-x: hidden;
`