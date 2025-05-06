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
       
          <em>"Let food be thy medicine and medicine be thy food."</em>
          <br />
          I’ve always loved oats—comforting, simple, wholesome.
          But at some point, I stopped reaching for them.
        <br />
        Not because I didn’t enjoy them, but because they no longer served me.
        <br />
        Too much sugar. Too many carbs.
        And not enough of what actually fuels a focused, healthy day.
        <br />

        But after digging into the research, I realized something powerful:
        <br />
        🌿 Oats can do more. Be more.
        <br />
        They can be functional. Balanced. Truly nourishing.
        That’s when ZeVa Oats was born.
        <br /><br />


        ✨ What Makes ZeVa Different?
        <br />
        <br />
        No Added Sugar: Ever.
        <br />
        Lion’s Mane: Boost your focus, clarity, and memory—naturally
        <br />
        Ashwagandha: The ancient adaptogen for stress relief, balanced mood, and vitality
        <br />
        Protien: Support lean muscle. As a vegetarian, I know how tough it can be to get enough protein. That’s why ZeVa Oats is packed with plant-based protein, making it easy to stay nourished, no matter how busy your day gets.



        <br />
        <br />
        Because breakfast shouldn’t just fill you up.
        It should fuel who you're becoming.
        <br />
        For the Morning Hustlers and Midnight Dreamers.
        <br/>
        </S.DiaryEntry>

      </S.DiaryNotebook>
    </S.DiaryPage>
  );
};

export default WhyZeva; 