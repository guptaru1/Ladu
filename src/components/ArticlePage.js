import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles'; // Adjust path if needed
import * as S from '../styles/LandingPageStyles';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(a => String(a.id) === id);

  if (!article) {
    return (
      <S.Container>
        <S.Section background="#fff">
          <h2>Article not found</h2>
          <Link to="/" style={{ color: '#3a5a7a', textDecoration: 'underline' }}>Back to Home</Link>
        </S.Section>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Section background="#fff">
        <Link to="/" style={{ color: '#3a5a7a', textDecoration: 'underline', position: 'absolute', top: 32, left: 32 }}>← Home</Link>
        <div style={{ maxWidth: 700, margin: '0 auto', paddingTop: 40 }}>
          <h1 style={{ color: '#222', fontWeight: 800, fontSize: '2.2rem', marginBottom: 24 }}>{article.title}</h1>
          <div style={{ color: '#444', fontSize: '1.2rem', lineHeight: 1.7 }}>
            {article.text}
          </div>
        </div>
      </S.Section>
    </S.Container>
  );
};

export default ArticlePage;