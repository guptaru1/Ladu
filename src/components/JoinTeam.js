import React, { useState } from 'react';
import * as S from '../styles/JoinTeamStyles';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

{/* const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY) */}
const JoinTeam = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    link: '',
    reason : ''
  });
  const [submitted, setSubmitted] = useState(false);


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const {data, error} = await supabase.from('join_team').insert([
      {
        name: form.name,
        email: form.email,
        portfolio_link : form.link,
        joining_reason : form.reason,
      }
    ]);

    if (error) {
      alert('There was an error submitting your application. Please try again.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <S.JoinUsSection>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <S.BackHomeLink>← Home</S.BackHomeLink>
      </Link>
      <h1 style={{ fontWeight: 800, fontSize: '2.5rem', marginBottom: 8 }}>Join Us</h1>
      <div style={{ fontSize: '1.2rem', marginBottom: 32, color: '#fff', textAlign: 'center' }}>
        Help us build the future of breakfast
      </div>
      {submitted ? (
        <div style={{ color: '#fff', fontSize: '1.2rem', marginTop: 40, textAlign: 'center' }}>
          Thank you for taking the time to submit the form <br/>
          We will be in touch soon.
        </div>
      ) : (
        <S.JoinUsForm onSubmit={handleSubmit}>
          <div>
            <S.JoinUsLabel htmlFor="name">Name</S.JoinUsLabel>
            <S.JoinUsInput
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <S.JoinUsLabel htmlFor="email">Email</S.JoinUsLabel>
            <S.JoinUsInput
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <S.JoinUsLabel htmlFor="link">Link that best represents you</S.JoinUsLabel>
            <S.JoinUsInput
              id="link"
              name="link"
              value={form.link}
              onChange={handleChange}
              placeholder="Portfolio, LinkedIn, GitHub, etc."
              required
            />
          </div>


          <div>
            <S.JoinUsLabel htmlFor="addition">Why do you want to join us? <br />Be specific.</S.JoinUsLabel>
            <S.JoinUsTextarea
              id="addition"
              name="addition"
              value={form.addition}
              onChange={handleChange}
              required
            />
          </div>
          <S.JoinUsButton type="submit">Submit</S.JoinUsButton>
        </S.JoinUsForm>
      )}
    </S.JoinUsSection>
  );
};

export default JoinTeam;