import styled from 'styled-components';


export const JoinUsSection = styled.section`
  min-height: 100vh;
  background: #181818;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
`;

export const JoinUsForm = styled.form`
  background: rgba(30, 30, 30, 0.95);
  border-radius: 16px;
  padding: 40px 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const JoinUsLabel = styled.label`
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: #fff;
`;

export const JoinUsInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #222;
  color: #fff;
  font-size: 1rem;
  margin-top: 12px;
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const JoinUsTextarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #222;
  color: #fff;
  font-size: 1rem;
  min-height: 60px;
  margin-top: 12px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const JoinUsButton = styled.button`
  background: #fff;
  color: #181818;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #e2e2e2;
    color: #111;
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