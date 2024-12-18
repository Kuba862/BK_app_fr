import styled from "styled-components";

export const MediaSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    width: 75%;
    height: 100%;
    overflow-y: auto;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 85%;
        padding: 15px;
        gap: 8px;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 10px;
        gap: 6px;
    }
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
    }

    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
`;

export const LoadMoreButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background-color: #0056b3;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 14px;
        margin: 15px auto;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 12px;
        margin: 10px auto;
    }
`;

export const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PopupContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
        width: 90%;
    }
`;

export const PopupButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 768px) {
        gap: 8px;
        margin-top: 15px;
    }

    @media (max-width: 480px) {
        gap: 6px;
        margin-top: 10px;
        flex-direction: column;
    }
`;

export const DeleteButton = styled.button`
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #cc0000;
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 5px 10px;
        font-size: 12px;
    }
`;

export const CancelButton = styled.button`
    background-color: #f8f9fa;
    color: #333;
    border: 1px solid #ddd;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #e2e6ea;
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 5px 10px;
        font-size: 12px;
    }
`;

export const Message = styled.div`
    text-align: center;
    margin-top: 20px;

    @media (max-width: 768px) {
        margin-top: 15px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        margin-top: 10px;
        font-size: 12px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin-top: 20px;

    @media (max-width: 768px) {
        margin-top: 15px;
        font-size: 20px;
    }

    @media (max-width: 480px) {
        margin-top: 10px;
        font-size: 18px;
    }
`;