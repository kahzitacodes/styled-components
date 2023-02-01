import styled from "styled-components";

export const AvatarContainer = styled.img`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border: 2px solid white;
    border-radius: calc(${({ size }) => size}px + 20px);
`;