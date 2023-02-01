import styled from "styled-components";

export const Container = styled.main`
    align-items: flex-start;
    max-width: 1330px;
    padding: 0 24px;
    margin: 60px auto;
    display: flex;
    justify-content: space-between;
    gap: 10%;
`;

export const Col = styled.div`
    flex: ${({ flex }) => flex};
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const Title = styled.h2`
    font-size: 18px;
`;

export const FeedList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;


