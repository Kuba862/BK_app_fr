import styled from "styled-components";

export const TextEditorContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;

    @media (max-width: 768px) {
        padding: 0.8rem;
    }

    @media (max-width: 480px) {
        padding: 0.6rem;
    }
`;

export const PresentationTitleInput = styled.input`
    width: 99%;
    padding: 0.5em;
    font-size: 1.2em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;

    @media (max-width: 768px) {
        padding: 0.4em;
        font-size: 1.1em;
        margin-bottom: 0.8em;
    }

    @media (max-width: 480px) {
        padding: 0.3em;
        font-size: 1em;
        margin-bottom: 0.6em;
    }
`;

export const MessageContainer = styled.div<{ success: boolean }>`
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    width: 100%;
    background-color: ${props => 
        props.success 
            ? props.theme.successBg || '#d4edda'
            : props.theme.errorBg || '#f8d7da'
    };
    color: ${props => 
        props.success 
            ? props.theme.successText || '#155724'
            : props.theme.errorText || '#721c24'
    };
    transition: all 0.3s ease;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-top: 0.8rem;
        padding: 0.8rem;
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        margin-top: 0.6rem;
        padding: 0.6rem;
        font-size: 0.9rem;
    }
`;

export const EditorWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        max-width: 90%;
    }

    @media (max-width: 480px) {
        max-width: 95%;
    }
`;

export const ToolbarContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    background: ${props => props.theme.background};
    padding: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.border};

    @media (max-width: 768px) {
        padding: 0.4rem;
    }

    @media (max-width: 480px) {
        padding: 0.3rem;
    }
`;