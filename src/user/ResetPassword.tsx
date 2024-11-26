import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResetContainer, ResetForm, ResetMessage } from '../style/ResetPassword';

interface FormData {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  const [formData, setFormData] = useState<FormData>({
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      navigate('/forgot-password');
    }
  }, [token, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('Hasła nie są identyczne');
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_RESET_PASSWORD_ENDPOINT}`,
        {
          token,
          newPassword: formData.password,
        }
      );
      setMessage(res.data.msg);
      setFormData({ password: '', confirmPassword: '' });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResetContainer>
      <h2>Ustaw nowe hasło</h2>
      <ResetForm onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="password"> nowe hasło</label>
          <input
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Powtórz nowe hasło</label>
          <input
            type="password"
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Ustawianie...' : 'Ustaw hasło'}
          </button>
        </div>
      </ResetForm>
      {message && <ResetMessage>{message}</ResetMessage>}
    </ResetContainer>
  );
};

export default ResetPassword;
