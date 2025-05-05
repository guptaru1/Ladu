import styled from 'styled-components';

export const DiaryPage = styled.div`
  min-height: 100vh;
  background: #f8f5e4 url('https://www.transparenttextures.com/patterns/old-mathematics.png');
  font-family: 'Caveat', 'Dancing Script', 'Georgia', serif;
  padding: 60px 0;
  display: flex;
  justify-content: center;
`;

export const DiaryNotebook = styled.div`
  background: #fffbe8;
  border: 2px solid #e2d3b3;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(60,40,10,0.12);
  max-width: 700px;
  width: 90%;
  padding: 40px 32px 32px 56px;
  position: relative;
  margin: 0 auto;
  min-height: 70vh;
  box-sizing: border-box;
  font-family: inherit;
`;

export const DiaryMargin = styled.div`
  position: absolute;
  left: 32px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #e2d3b3;
  border-radius: 2px;
`;

export const DiaryTitle = styled.h1`
  font-family: 'Caveat', 'Dancing Script', 'Georgia', serif;
  font-size: 2.5rem;
  color: #6b4f1d;
  margin-bottom: 24px;
  text-align: left;
`;

export const DiaryEntry = styled.div`
  font-size: 1.2rem;
  color: #3d2b1f;
  margin-bottom: 32px;
  line-height: 1.7;
  font-family: inherit;
`;

export const DiaryLink = styled.a`
  color: #8b5c2a;
  text-decoration: underline wavy #c2a76c;
  &:hover {
    color: #b97a3a;
    background: #f5e9c6;
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