import React from 'react';
import styled from 'styled-components';

const LeafContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  perspective: 1000px;
  margin: 40px auto;
`;

const Leaf = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotateY(0deg);
    }
    50% {
      transform: translateY(-15px) rotateY(180deg);
    }
  }
`;

const LeafShape = styled.div`
  width: 80px;
  height: 50px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, #4a8f3c, #76b852);
  border-radius: 50% 5% 50% 5%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Stem = styled.div`
  width: 3px;
  height: 40px;
  background: linear-gradient(to bottom, #2d5a24, #4a8f3c);
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const AyurvedicLeaf = () => {
  return (
    <LeafContainer>
      <Leaf>
        <Stem />
        <LeafShape />
      </Leaf>
    </LeafContainer>
  );
};

export default AyurvedicLeaf; 