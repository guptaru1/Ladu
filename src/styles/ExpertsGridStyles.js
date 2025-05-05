export const ExpertsSection = styled.section`
  background: #fff;
  color: #181818;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExpertsTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 32px;
  color: #181818;
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
`;

export const ExpertQuote = styled.div`
  background: none;
  color: #222;
  font-size: 1.15rem;
  font-style: italic;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  line-height: 1.6;
`;

export const ExpertAttribution = styled.div`
  font-size: 1rem;
  color: #7a6a4f;
  font-style: normal;
  margin-top: 10px;
  font-weight: 600;
`;