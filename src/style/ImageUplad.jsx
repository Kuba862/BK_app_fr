import styled from "styled-components";

export const UploadButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.theme.primaryHover};
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
    gap: 0.3rem;
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: ${props => props.theme.background};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.2rem;
    width: 90%;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: 95%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const DimensionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
`;

export const ResizeButton = styled(UploadButton)``;

export const DimensionInput = styled.input`
  width: 80px;
  padding: 0.3rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 70px;
    padding: 0.25rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.2rem;
  }
`;

export const DimensionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 0.85rem;
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 0.3rem;
  }
`;

export const ToolbarGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  background: ${props => props.theme.background};

  @media (max-width: 768px) {
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
  }
`;