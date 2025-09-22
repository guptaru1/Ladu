import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import OatmealBowl from './OatmealBowl';
import AyurvedicLeaf from './AyurvedicLeaf';
import * as S from '../styles/LandingPageStyles';
import styled from 'styled-components';
import expertQuotes from './expertQuotes';
import Oatmeal from '../images/oatmeal.png';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentTagline, setCurrentTagline] = useState(0);
  const navigate = useNavigate();

  const typingText = "Breakfast designed for deep work";
  const typingSpeed = 65;

  const taglines = [
    "No Sugar.",
    "No Soy.",
    "No GMOs.",
    "No Gums.",
    "No Artificial Anything.",
    "No Fillers.",
  ];

  const articles = [
    {
      id: 1,
      title: "Oats and Glyphosate",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Learn more about glyphosate in Oats and if you should be worried?."
    },
    {
      id: 2,
      title: "Protein in Vegeterians",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Start your day right with these simple yet effective breakfast habits."
    },
    {
      id: 3,
      title: "Sacha Inchi: A Super Seed for Growing Kids",
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Explore why this plant-based powerhouse could be a game-changer in supporting natural growth and development in children."
    },

  ];

  const ingredients = [
    {
      name: "Sacha Inchi",
      desc: `Sacha Inchi is a rich natural protein source that is grain free, paleo friendly, and easily digestible. Sacha inchi is considered a complete protein because it contains all nine essential amino acids and in addition to that has high amounts of omega-3 fatty acid. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0308814621024651" target="_blank" rel="noopener noreferrer" style="color:#8b5c2a;text-decoration:underline black">Source</a>`
    },
    {
      name: "Tulsi (Holy Basil)",
      desc: "An adaptogenic herb revered in Ayurveda for its calming and balancing effects. Tulsi may help the body adapt to stress and support immune and respiratory health."
    },
    {
      name: "Brahmi",
      desc: "A powerful adaptogen traditionally used to help the body manage stress. Brahmi may support energy, mood, and cortisol balance while promoting overall vitality."
    },
  ];



  const [ingredientIndex, setIngredientIndex] = useState(0);

  const articlesPerPage = 3;
  const totalSlides = Math.ceil(articles.length / articlesPerPage);

  useEffect(() => {
    let currentIndex = 0;
    let timeout;
    const typeText = () => {
      if (currentIndex < typingText.length) {
        setDisplayText(typingText.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeText, typingSpeed);
      }
    };

    typeText();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(prev =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const visibleArticles = articles.slice(
    currentSlide * articlesPerPage,
    currentSlide * articlesPerPage + articlesPerPage
  );

  const handlePrevIngredient = () => {
    setIngredientIndex(idx => idx === 0 ? ingredients.length - 1 : idx - 1);
  };

  const handleNextIngredient = () => {
    setIngredientIndex(idx => idx === ingredients.length - 1 ? 0 : idx + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    document.querySelectorAll('.animated-content').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline(prev => (prev + 1) % taglines.length);
    }, 5000); // 5 seconds
  
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://docsign2-0.onrender.com/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <S.Container>

      <S.TopNavigation>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <S.NavLink>Product Offerings</S.NavLink>
        </Link>
        <Link to="/why-zeva" style={{ textDecoration: 'none' }}>
          <S.NavLink>Why ZeVa</S.NavLink>
        </Link>
        <Link to="/join-team" style={{ textDecoration: 'none' }}>
          <S.NavLink>Join the Team</S.NavLink>
        </Link>
      </S.TopNavigation>

      <S.Section background="#000">
        <S.AnimatedContent className="animated-content" direction="left">
        <S.Title>ZॐVA Oats</S.Title>
          <S.TypingText>
            {displayText}
            {displayText.length < typingText.length && <span className="cursor">|</span>}
          </S.TypingText>
          <img
  src={Oatmeal}
  alt="Oatmeal bowl"
  style={{
    width: 220,
    height: 220,
    display: 'block',
    margin: '0 auto'
  }}
/>
                <div style={{
        fontSize: '1.3rem',
        color: '#fff',
        fontWeight: 600,
        marginTop: 12,
        minHeight: 32,
        letterSpacing: '0.5px',
        transition: 'opacity 0.5s'
      }}>
        {taglines[currentTagline]}
      </div>
        </S.AnimatedContent>
      </S.Section>


      <S.IngredientsSection>
        <S.IngredientsLeft>
          <S.IngredientsTitle>Rooted in Nature. Backed by Science.</S.IngredientsTitle>
          <S.IngredientsIntro>
          ZॐVA blends modern wellness with ancient wisdom — using clean, earth-grown ingredients like Adaptogens, Ayurvedic herbs and plant-based Proteins. Each spoonful is crafted to support clarity, balance, and vitality - the way nature intended.
          </S.IngredientsIntro>
        </S.IngredientsLeft>
        <S.IngredientsRight>
          <S.IngredientName>{ingredients[ingredientIndex].name}</S.IngredientName>
          <S.IngredientDesc
            dangerouslySetInnerHTML={{ __html: ingredients[ingredientIndex].desc }}
          />
          <S.IngredientArrows>
            <S.IngredientArrow onClick={handlePrevIngredient}>&larr;</S.IngredientArrow>
            <S.IngredientArrow onClick={handleNextIngredient}>&rarr;</S.IngredientArrow>
          </S.IngredientArrows>
        </S.IngredientsRight>
      </S.IngredientsSection>



      <S.ExpertsSection>
  <S.ExpertsTitle>What the experts are saying</S.ExpertsTitle>
  <S.ExpertsGrid>
    {expertQuotes.map((item, idx) => (
      <div key={idx}>
        <S.ExpertQuote>
          “{item.quote}”
        </S.ExpertQuote>
        <S.ExpertAttribution>
          — <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
        </S.ExpertAttribution>
      </div>
    ))}
  </S.ExpertsGrid>
</S.ExpertsSection>

      
{/*

      <S.Section background="#111">
        <S.AnimatedContent className="animated-content" direction="right">
          <S.Title>What the Experts Are Saying</S.Title>
          <S.Subtitle>Explore a world of flavors in every bite with our unique oatmeal blends.</S.Subtitle>
        </S.AnimatedContent>
      </S.Section>
      
<S.Section background="#000">
  <S.AnimatedContent className="animated-content" direction="left">
    <S.Title>Wall of Love</S.Title>
    <S.Subtitle>Enriched with Ayurvedic Herbs and Proteins</S.Subtitle>
    <AyurvedicLeaf />
  </S.AnimatedContent>
</S.Section>
*/}
      

      <S.ArticleSection background="#111">
        <S.AnimatedContent className="animated-content" direction="left">
          <S.Title>The ZॐVA Wellness Journal </S.Title>
          <S.Subtitle></S.Subtitle>
          
          <S.ArticleCarousel>
            <S.CarouselButton className="left" onClick={handlePrevSlide}>
              ←
            </S.CarouselButton>
            
            <S.ArticleContainer style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {visibleArticles.map((article) => (
                <S.ArticleCard key={article.id}>
                  <S.ArticleImage src={article.image} alt={article.title} />
                  <S.ArticleContent>
                    <S.ArticleTitle>{article.title}</S.ArticleTitle>
                    <S.ArticleText>{article.text}</S.ArticleText>
                    <S.ReadMoreButton as={Link} to={`/article/${article.id}`}>
                       Read More
                    </S.ReadMoreButton>
                  </S.ArticleContent>
                </S.ArticleCard>
              ))}
            </S.ArticleContainer>
            
            <S.CarouselButton className="right" onClick={handleNextSlide}>
              →
            </S.CarouselButton>
          </S.ArticleCarousel>
        </S.AnimatedContent>
      </S.ArticleSection>
      
      <S.Section background="#111">
        <S.AnimatedContent className="animated-content" direction="right">
          <S.Title> Ancient Herbs. Modern Focus. </S.Title>
          <S.Subtitle>Tired of burnout, but too busy for breakfast? ZॐVA fuels clarity in every spoon.</S.Subtitle>
          {!submitted ? (
            <S.WaitlistForm>
              <S.Input
                type="email"
                placeholder="Want first dibs? Join the waitlist via email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <S.Button onClick={handleSubmit}>Join Waitlist</S.Button>
            </S.WaitlistForm>
          ) : (
            <S.SuccessMessage>
              Thank you for joining our waitlist! We'll be in touch soon.
            </S.SuccessMessage>
          )}
        </S.AnimatedContent>
      </S.Section>
    </S.Container>
  );
};

export default LandingPage;


