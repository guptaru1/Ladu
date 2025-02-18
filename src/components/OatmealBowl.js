import React from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  0% {
    transform: translateY(-20px) translateX(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(140px) translateX(${() => Math.random() * 40 - 20}px) rotate(360deg);
    opacity: 0;
  }
`;

const ContainerWrapper = styled.div`
  width: 200px;
  height: 180px;
  position: relative;
  perspective: 1000px;
  margin: 40px auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;

  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

const ContainerBody = styled.div`
  width: 200px;
  height: 180px;
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const Lid = styled.div`
  width: 200px;
  height: 20px;
  position: absolute;
  top: -10px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Oatmeal = styled.div`
  width: 180px;
  height: 140px;
  position: absolute;
  top: 25px;
  left: 10px;
  background: linear-gradient(45deg, #fefae0, #faedcd);
  border-radius: 10px;
  transform: translateZ(-5px);
`;

const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 5px 15px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
`;

const FallingOatsContainer = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  top: -20px;
  left: 10px;
  overflow: hidden;
  pointer-events: none;
`;

const Oat = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fefae0;
  border-radius: 50%;
  animation: ${fall} 2s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}px;
  opacity: 0;
`;

const OatFlake = styled.div`
  position: absolute;
  width: 6px;
  height: 3px;
  background: #faedcd;
  border-radius: 40%;
  animation: ${fall} 2.5s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}px;
  opacity: 0;
`;

const OatmealBowl = () => {
  // Generate arrays for oats and flakes
  const oats = Array.from({ length: 10 }, (_, i) => ({
    id: `oat-${i}`,
    delay: Math.random() * 2,
    left: Math.random() * 160
  }));

  const flakes = Array.from({ length: 15 }, (_, i) => ({
    id: `flake-${i}`,
    delay: Math.random() * 2,
    left: Math.random() * 160
  }));

  return (
    <ContainerWrapper>
      <Container>
        <ContainerBody>
          <Lid />
          <FallingOatsContainer>
            {oats.map(oat => (
              <Oat 
                key={oat.id} 
                delay={oat.delay} 
                left={oat.left} 
              />
            ))}
            {flakes.map(flake => (
              <OatFlake 
                key={flake.id} 
                delay={flake.delay} 
                left={flake.left} 
              />
            ))}
          </FallingOatsContainer>
          <Oatmeal />
          <Label>KarMa Oats</Label>
        </ContainerBody>
      </Container>
    </ContainerWrapper>
  );
};

export default OatmealBowl; 