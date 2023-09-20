import React from 'react';
import styled, { keyframes } from 'styled-components';


const pulse = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
`;

const LoadingContainer = styled.div`
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingRing = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid transparent;
  border-top: 10px solid red;
  border-radius: 50%;
  animation: ${pulse} 0.5s linear infinite;
`;



const FuturisticDecoration = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  animation: ${pulse} 2s linear infinite reverse;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <LoadingRing />
      
      <FuturisticDecoration>This webpage is developed by @codewithsharma</FuturisticDecoration>
    </LoadingContainer>
  );
};

export default LoadingScreen;
