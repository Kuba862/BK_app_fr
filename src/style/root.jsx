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
