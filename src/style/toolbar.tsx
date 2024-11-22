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
`

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
`

export const ButtonsGroup = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: ${COLORS.light_grey};
`;

export const ButtonSection = styled.div`
    display: flex;
    gap: 10px;
`;