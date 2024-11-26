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

  @media (max-width: 480px) {
    margin: 1rem;
    padding: 1.5rem;
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
`;