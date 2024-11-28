import styled from 'styled-components';

export const ForgotContainer = styled.div`
  min-height: calc(100vh - 400px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h1 {
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: calc(100vh - 300px);
    padding: 1.5rem;

    h1 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    min-height: calc(100vh - 200px);
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ForgotForm = styled.form`
  width: 100%;
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

      &:hover:not(:disabled) {
        background: ${(props) => props.theme.primaryHover};
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }

      &:disabled {
        background: ${(props) => props.theme.disabled};
        cursor: not-allowed;
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

export const ForgotMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.9rem;

  &.error {
    color: ${(props) => props.theme.error};
  }

  &.success {
    color: ${(props) => props.theme.success};
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