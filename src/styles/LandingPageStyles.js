import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background: #000;
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: ${props => props.background || '#000'};
  transition: background 0.5s ease;
  position: relative;
  overflow: hidden;
`;

export const AnimatedContent = styled.div`
  opacity: 0;
  transform: translateX(${props => props.direction === 'left' ? '-100px' : '100px'});
  transition: all 1s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 800;
  background: linear-gradient(45deg, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #999;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const WaitlistForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: #666;
  }
`;

export const Button = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 8px;
  background: #333;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    background: #444;
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

export const SuccessMessage = styled.div`
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  animation: fadeIn 0.5s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// ... (copy all other styled components from LandingPage.js)
// Include all the styled components from the original file 