import styled from "styled-components";
import { COLORS } from "../vars";

export const Button = styled.button`
    background-color: ${COLORS.orange};
    border: 1px solid ${COLORS.light_green};
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: .6rem;
    font-weight: 700;
    display: inline-block;
    cursor: pointer;
    transition: all .2s ease-in-out;
    background-size: 200% 100%;
    background-position: 0% 0%;
    &:hover {
        background: linear-gradient(270deg, rgba(99,218,99,1) 90%, rgba(0,0,0,1) 100%);
        background-position: 100% 0%;
        color: ${COLORS.dark_blue};
    }
    &:disabled {
        background-color: ${COLORS.dark_grey};
        border: 1px solid ${COLORS.dark_grey};
        /* background-color: ${COLORS.dark_blue};
        color: ${COLORS.light}; */
    }
    &:disabled:hover {
        color: ${COLORS.light};
    }
    &.active {
        background: linear-gradient(90deg, rgba(99,218,99,1) 90%, rgba(0,0,0,1) 100%);
        background-position: 100% 0%;
        color: ${COLORS.dark_blue};
    }
`

export const ButtonsGroup = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ButtonSection = styled.div`
    display: flex;
    gap: 10px;
`;