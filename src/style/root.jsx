import styled from 'styled-components';

export const Root = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background.primary};
  background-image: ${({ theme }) => theme.background.gradient};
  color: ${({ theme }) => theme.text.primary};
  transition: all 0.3s ease;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.text.primary};
  }

  p {
    color: ${({ theme }) => theme.text.secondary};
  }

  small,
  .text-muted {
    color: ${({ theme }) => theme.text.muted};
  }

  a {
    color: ${({ theme }) => theme.text.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(78,205,196,0.8)'
          : 'rgba(61,163,153,0.8)'};
    }
  }

  button {
    background: ${({ theme }) => theme.text.accent};
    color: ${({ theme }) => (theme.mode === 'dark' ? '#1a1a1a' : '#ffffff')};
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(78,205,196,0.8)'
          : 'rgba(61,163,153,0.8)'};
    }
  }

  input,
  textarea,
  select {
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text.primary};
    padding: 8px 12px;
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.text.accent};
    }

    &::placeholder {
      color: ${({ theme }) => theme.text.muted};
    }
  }

  // Dodatkowe style dla elementów interfejsu
  .card {
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    padding: 20px;
  }

  .divider {
    border-bottom: 1px solid ${({ theme }) => theme.border};
    margin: 20px 0;
  }

  .badge {
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(78,205,196,0.1)' : 'rgba(61,163,153,0.1)'};
    color: ${({ theme }) => theme.text.accent};
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.85em;
  }
`;

export const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${props => props.theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 1.5rem auto;
    padding: 1.5rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    margin: 1rem;
    padding: 1rem;
  }
`;

export const SettingsTitle = styled.h1`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const SettingsSection = styled.section`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 1rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
  }

  input {
    padding: 0.8rem;
    border: 1px solid ${props => props.theme.border};
    border-radius: 5px;
    background: ${props => props.theme.inputBg};
    color: ${props => props.theme.textPrimary};

    &:focus {
      outline: none;
      border-color: ${props => props.theme.primary};
    }
  }

  @media (max-width: 768px) {
    gap: 0.4rem;

    label {
      font-size: 0.85rem;
    }

    input {
      padding: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.3rem;

    label {
      font-size: 0.8rem;
    }

    input {
      padding: 0.6rem;
    }
  }
`;

export const SaveButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
  align-self: flex-end;

  &:hover {
    background: ${props => props.theme.primaryHover};
  }

  &:disabled {
    background: ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    width: 100%;
  }
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 0.9rem;

  &.success {
    background: ${props => props.theme.success}20;
    color: ${props => props.theme.success};
  }

  &.error {
    background: ${props => props.theme.error}20;
    color: ${props => props.theme.error};
  }

  @media (max-width: 768px) {
    margin-top: 0.8rem;
    padding: 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.6rem;
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;
