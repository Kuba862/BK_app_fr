import styled from 'styled-components';

export const DeleteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${props => props.theme.border || '#ccc'};
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.8);
    padding: 2rem; 
    width: 50%;
    margin: 2rem auto 0;

    @media (max-width: 768px) {
        width: 70%;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        width: 90%;
        padding: 1rem;
    }
`

export const DeleteButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    width: 20%;

    @media (max-width: 768px) {
        width: 40%;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`

export const DeleteButton = styled.button`
    background-color: ${props => props.theme.primary || '#000'};
    text-transform: uppercase;
    color: ${props => props.theme.textPrimary || '#fff'};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-size: 1rem;

    &:hover {
        background-color: ${props => props.theme.primaryHover || '#000'};
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
`

export const InfoText = styled.p`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.2rem;
    color: ${props => props.theme.textPrimary || '#333'};
    strong {
        text-decoration: underline;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 0.8rem;
    }
`