import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OatmealBowl from './OatmealBowl';
import AyurvedicLeaf from './AyurvedicLeaf';
import * as S from '../styles/LandingPageStyles';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

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
      <S.Section background="#000">
        <S.AnimatedContent className="animated-content" direction="left">
          <S.Title>Welcome to KarMa</S.Title>
          <S.Subtitle>The future of breakfast</S.Subtitle>
          <OatmealBowl />
        </S.AnimatedContent>
      </S.Section>

      <S.Section background="#111">
        <S.AnimatedContent className="animated-content" direction="right">
          <S.Title>Overnight Oats</S.Title>
          <S.Subtitle>Explore a world of flavors in every bite with our unique oatmeal blends.</S.Subtitle>
        </S.AnimatedContent>
      </S.Section>

      <S.Section background="#000">
        <S.AnimatedContent className="animated-content" direction="left">
          <S.Title>Nutrionally Packed</S.Title>
          <S.Subtitle>Enriched with Ayurvedic Herbs and Proteins</S.Subtitle>
          <AyurvedicLeaf />
        </S.AnimatedContent>
      </S.Section>

      <S.Section background="#111">
        <S.AnimatedContent className="animated-content" direction="right">
          <S.Title>Busy days don't have to mean unhealthy breakfasts. Oatmeal that fits your hustle.</S.Title>
          <S.Subtitle>Oatmeal today for a healthier tomorrow – the small change that makes a big difference.</S.Subtitle>
          {!submitted ? (
            <S.WaitlistForm>
              <S.Input
                type="email"
                placeholder="Enter your email"
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
