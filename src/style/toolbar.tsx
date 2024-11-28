import styled from "styled-components";
import { COLORS } from "../vars";

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    transition: all .15s ease-in-out;
    
    &:hover {
        background-color: ${COLORS.medium_grey};
    }
    
    &.active {
        background-color: ${COLORS.medium_grey};
    }
    
    svg {
        width: 15px;
        height: 15px;
    }

    @media (max-width: 768px) {
        padding: 8px;
        
        svg {
            width: 13px;
            height: 13px;
        }
    }

    @media (max-width: 480px) {
        padding: 6px;
        
        svg {
            width: 12px;
            height: 12px;
        }
    }
`;

export const ColorSection = styled.div`
    position: absolute;
    top: 153px;
    left: 205px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 10%;
    gap: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    padding: 10px 5px;
    border-radius: 5px;
    z-index: 1;

    @media (max-width: 768px) {
        top: 130px;
        left: 180px;
        width: 15%;
        padding: 8px 4px;
        gap: 4px;
    }

    @media (max-width: 480px) {
        top: 110px;
        left: 150px;
        width: 20%;
        padding: 6px 3px;
        gap: 3px;
    }
`;

export const ButtonsGroup = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: ${COLORS.light_grey};

    @media (max-width: 768px) {
        gap: 8px;
        padding: 8px;
    }

    @media (max-width: 480px) {
        gap: 6px;
        padding: 6px;
    }
`;

export const ButtonSection = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 8px;
    }

    @media (max-width: 480px) {
        gap: 6px;
    }
`;

export const ToolbarContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: ${COLORS.light_grey};
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        padding: 4px;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        padding: 3px;
        margin-bottom: 6px;
    }
`;

export const ColorButton = styled(Button)`
    width: 25px;
    height: 25px;
    padding: 0;
    border: 1px solid ${COLORS.medium_grey};

    @media (max-width: 768px) {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
`;