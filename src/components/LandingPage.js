import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import OatmealBowl from './OatmealBowl';
import AyurvedicLeaf from './AyurvedicLeaf';
import * as S from '../styles/LandingPageStyles';
import styled from 'styled-components';
import expertQuotes from './expertQuotes';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const navigate = useNavigate();

  const typingText = "Breakfast designed for deep work";
  const typingSpeed = 80;

  const articles = [
    {
      id: 2,
      title: "Ayurvedic Benefits",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Learn about the ancient wisdom of Ayurveda and how it enhances our oatmeal recipes."
    },
    {
      id: 3,
      title: "Healthy Breakfast Habits",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Start your day right with these simple yet effective breakfast habits."
    },
    {
      id: 4,
      title: "Protein-Packed Morning",
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Why protein is essential for your morning routine and how to incorporate it."
    },
    {
      id: 5,
      title: "Superfood Ingredients",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Explore the superfood ingredients that make our oats special."
    },
    {
      id: 6,
      title: "Meal Prep Made Easy",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Simplify your mornings with these easy meal prep tips for overnight oats."
    }
  ];

  const ingredients = [
    {
      name: "Lion's Mane",
      desc: "A functional mushroom known to support brain health, memory, and focus. Lion's Mane may promote neurogenesis and help combat mental fatigue — perfect for deep work and clarity."
    },
    {
      name: "Sacha Inchi",
      desc: `Sacha Inchi is a rich natural protein source that is grain free, paleo friendly, and easily digestible. Sacha inchi is considered a complete protein because it contains all nine essential amino acids and in addition to that has high amounts of omega-3 fatty acid. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0308814621024651" target="_blank" rel="noopener noreferrer" style="color:#8b5c2a;text-decoration:underline black">Source</a>`
    },
    {
      name: "Tulsi (Holy Basil)",
      desc: "An adaptogenic herb revered in Ayurveda for its calming and balancing effects. Tulsi may help the body adapt to stress and support immune and respiratory health."
    },
    {
      name: "Ashwagandha",
      desc: "A powerful adaptogen traditionally used to help the body manage stress. Ashwagandha may support energy, mood, and cortisol balance while promoting overall vitality."
    },
  ];



  const [ingredientIndex, setIngredientIndex] = useState(0);

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
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(articles.length / 3) - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(articles.length / 3) - 1 ? 0 : prev + 1));
  };

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
        <S.Title>ZeV̇a Oats</S.Title>
          <S.TypingText>
            {displayText}
            {displayText.length < typingText.length && <span className="cursor">|</span>}
          </S.TypingText>
          <OatmealBowl />
        </S.AnimatedContent>
      </S.Section>


      <S.IngredientsSection>
        <S.IngredientsLeft>
          <S.IngredientsTitle>Rooted in Nature. Backed by Science.</S.IngredientsTitle>
          <S.IngredientsIntro>
          ZeV̇a blends modern wellness with ancient wisdom — using clean, earth-grown ingredients like Adaptogens, Ayurvedic herbs and plant-based Proteins. Each spoonful is crafted to support clarity, balance, and vitality - the way nature intended.
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
          <S.Title>The ZeV̇a Journal</S.Title>
          <S.Subtitle></S.Subtitle>
          
          <S.ArticleCarousel>
            <S.CarouselButton className="left" onClick={handlePrevSlide}>
              ←
            </S.CarouselButton>
            
            <S.ArticleContainer style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {articles.slice(currentSlide * 3, (currentSlide * 3) + 3).map((article) => (
                <S.ArticleCard key={article.id}>
                  <S.ArticleImage src={article.image} alt={article.title} />
                  <S.ArticleContent>
                    <S.ArticleTitle>{article.title}</S.ArticleTitle>
                    <S.ArticleText>{article.text}</S.ArticleText>
                    <S.ReadMoreButton onClick={() => navigate(`/article/${article.id}`)}>
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
          <S.Title>Power your AM. Own your PM. </S.Title>
          <S.Subtitle>Tired of burnout, but too busy for breakfast? ZeV̇a fuels clarity in every spoon.</S.Subtitle>
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


