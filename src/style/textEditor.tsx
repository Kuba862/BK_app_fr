import styled from "styled-components";

export const TextEditorContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PresentationTitleInput = styled.input`
    width: 99%;
    padding: 0.5em;
    font-size: 1.2em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
`

export const MessageContainer = styled.div<{ success: boolean }>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
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
`;