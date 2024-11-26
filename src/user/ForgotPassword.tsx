import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ForgotMessage, ForgotForm, ForgotContainer } from '../style/ForgotPassword';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_FORGOT_PASSWORD_ENDPOINT}`,
        { email }
      );
      setMessage(res.data.msg);
      setEmail('');
      setIsLoading(false);
    } catch (err) {
      setMessage('Coś poszło nie tak, spróbuj ponownie.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ForgotContainer>
      <h1>Zresetuj hasło</h1>
      <ForgotForm onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Wysyłanie...' : 'Zresetuj hasło'}
          </button>
        </div>
      </ForgotForm>
      {message && <ForgotMessage>{message}</ForgotMessage>}
    </ForgotContainer>
  );
};

export default ForgotPassword;
