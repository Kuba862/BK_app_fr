import styled from "styled-components";

export const FooterElement = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    color: white;
    background: #1a1a1a;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      #4ecdc4,
      transparent 20%,
      transparent 80%,
      #4ecdc4
    );
  }
    p {
        font-size: .7rem;
        text-align: center;
        margin-bottom: 0;
    }
    span {
        display: flex;
        gap: .4em;
    }
`