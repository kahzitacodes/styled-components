import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const Btn = styled.button<IButtonStyled>`
    border: none;
    color: white;
    cursor: pointer;
    transition: all .2s linear;
    text-transform: uppercase;
    display: flex;
    justify-content:center;
    &:hover {
        background: #E4105D;
    }

    ${({ variant }) => variant === "secondary" && css`
        border-radius: 22px;
        background: #565656;
        font-size: 16px;
        padding: 8px 24px;
    `}

    ${({ variant }) => variant === "primary" && css`
        background: #E4105D;
        border-radius: 30px;
        font-size: 18px;
        font-weight: 600;
        padding: 16px 40px;
        position: relative;

        &:hover {
            box-shadow: 0px 0px 32px 0px rgb(228 16 93);
        }

        &::after {
            content: '';
            position: absolute;
            border: 2px solid #E4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 8px);
            height: calc(100% + 8px);
            border-radius: 32px;
        }
    `}
`;