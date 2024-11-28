import styled from 'styled-components';

export const RegisterForm = styled.form`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${(props) => props.theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    width: 100%;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.textPrimary};
      font-size: 0.9rem;
      font-weight: 500;
    }

    input {
      padding: 0.8rem;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 5px;
      background: ${(props) => props.theme.inputBg};
      color: ${(props) => props.theme.textPrimary};
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: ${(props) => props.theme.primary};
        box-shadow: 0 0 0 2px ${(props) => props.theme.primary}33;
      }
    }

    button {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0.8rem;
      background: ${(props) => props.theme.primary};
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease;

      &:hover {
        background: ${(props) => props.theme.primaryHover};
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 350px;
    margin: 1.5rem auto;
    padding: 1.5rem;

    div {
      margin-bottom: 1.2rem;

      label {
        font-size: 0.85rem;
      }

      input {
        padding: 0.7rem;
        font-size: 0.95rem;
      }

      button {
        padding: 0.7rem;
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 480px) {
    max-width: 300px;
    margin: 1rem;
    padding: 1rem;

    div {
      margin-bottom: 1rem;

      label {
        font-size: 0.8rem;
      }

      input {
        padding: 0.6rem;
        font-size: 0.9rem;
      }

      button {
        padding: 0.6rem;
        font-size: 0.9rem;
      }
    }
  }
`;

export const RegisterMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.9rem;

  @media (max-width: 768px) {
    margin-top: 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.6rem;
    font-size: 0.8rem;
  }
`;
