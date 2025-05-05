import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background: #000;
`;


export const Section = styled.section`
  min-height: 80vh;
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

export const ExpertsSection = styled.section`
  background: linear-gradient(180deg, #181818 0%, #f7f4ed 100%);
  color: #222;
  padding: 80px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExpertsTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: #222;
  letter-spacing: 1px;
  text-align: center;
`;

export const ExpertsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px 48px;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 28px 0;
  }
  align-items: end; /* Ensures doctor names align at the bottom */
`;

export const ExpertQuote = styled.div`
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.7;
  margin-bottom: 18px;
  min-height: 90px; /* Adjust as needed for your content */
`;

export const ExpertAttribution = styled.div`
  font-size: 1rem;
  color: #3a5a7a; /* Muted blue */
  font-style: normal;
  font-weight: 600;
  a {
    color: #3a5a7a;
    text-decoration: underline;
    &:hover {
      color: #1a3a5a;
    }
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

export const TopNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const FlavorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const FlavorCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ArticleSection = styled(Section)`
  position: relative;
  padding: 80px 20px;
`;

export const ArticleCarousel = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ArticleContainer = styled.div`
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease;
  width: 100%;
`;

export const ArticleCard = styled.div`
  flex: 0 0 calc(33.333% - 20px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ArticleContent = styled.div`
  padding: 20px;
`;

export const ArticleTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ArticleText = styled.p`
  color: #999;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const ReadMoreButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  &.left {
    left: -20px;
  }
  
  &.right {
    right: -20px;
  }
`;

export const TopNavigation = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px 40px;
  display: flex;
  gap: 30px;
  z-index: 1000;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 5px 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export const TypingText = styled.div`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    min-height: 40px;
  }

  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: white;
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export const ProductTabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ProductTab = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const ProductCarousel = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ProductImage = styled.div`
  flex: 1;
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  color: white;
`;

export const ProductTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #999;
  margin-bottom: 30px;
`;

export const ProductPrice = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 20px;
`;

export const ProductButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`

export const IngredientsSection = styled.section`
  background: #fff;
  color: #111;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  padding: 60px 0;
  min-height: 500px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const IngredientsLeft = styled.div`
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  @media (max-width: 900px) {
    padding: 20px 20px;
  }
`;

export const IngredientsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #111;
`;

export const IngredientsIntro = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

export const IngredientsRight = styled.div`
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media (max-width: 900px) {
    padding: 20px 20px;
  }
`;

export const IngredientName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111;
`;

export const IngredientDesc = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 30px;
  text-align: left;
`;

export const IngredientArrows = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const IngredientArrow = styled.button`
  background: #eee;
  border: none;
  color: #111;
  font-size: 2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ddd;
  }
`;

export const BackHomeLink = styled.a`
  color: #fff;
  text-decoration: underline;
  position: absolute;
  top: 32px;
  left: 32px;
  font-size: 1.1rem;
  font-weight: 600;
  z-index: 1001;
  &:hover {
    color: #ccc;
  }
`;



// ... (copy all other styled components from LandingPage.js)
// Include all the styled components from the original file 