import styled from "styled-components";
import { IAvatarStyled } from "./types";

export const AvatarContainer = styled.img<IAvatarStyled>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border: 2px solid white;
    border-radius: calc(${({ size }) => size}px + 20px);
`;