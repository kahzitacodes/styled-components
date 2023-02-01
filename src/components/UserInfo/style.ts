import styled from "styled-components";
import { IUserinfoStyled } from "./types";

export const UserInfoContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;

    .infos {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    h4 {
        font-size: 18px;
    }
`;

export const UserProgress = styled.div<IUserinfoStyled>`
    width: 100%;
    height: 6px;
    background-color: white;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ percentual }) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`;