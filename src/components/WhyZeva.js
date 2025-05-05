import React from 'react';
import * as S from '../styles/DiaryStyles';
import { useNavigate, Link } from 'react-router-dom';

const WhyZeva = () => {
  return (

    <S.DiaryPage>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <S.BackHomeLink>← Home</S.BackHomeLink>
      </Link>
      <S.DiaryNotebook>
        <S.DiaryMargin />
        <S.DiaryTitle>Why ZeVa?</S.DiaryTitle>
        <S.DiaryEntry>
          <strong>April 27th, 2024</strong><br />
          Today, I reflected on why we started ZeVa Oats. It's about more than just breakfast—it's about real, honest ingredients and a return to mindful nourishment.<br /><br />
          We carefully select every ingredient, like <strong>collagen peptides</strong> for strength, <strong>grape seed extract</strong> for antioxidants, and <strong>pine bark extract</strong> for overall wellness. Each choice is backed by science and tradition.<br /><br />
          <em>"Let food be thy medicine and medicine be thy food."</em><br /><br />
          Curious about the science? Read more about the benefits of grape seed extract in this study: <S.DiaryLink href="https://www.sciencedirect.com/science/article/abs/pii/S0308814621024651" target="_blank" rel="noopener noreferrer">@ScienceDirect</S.DiaryLink>
        </S.DiaryEntry>
        <S.DiaryEntry>
          <strong>April 20th, 2024</strong><br />
          Our journey is a blend of ancient wisdom and modern nutrition. Every batch is a page in our story—crafted with care, for you.
        </S.DiaryEntry>
      </S.DiaryNotebook>
    </S.DiaryPage>
  );
};

export default WhyZeva; 