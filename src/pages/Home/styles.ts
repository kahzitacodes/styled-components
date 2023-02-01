import styled from "styled-components";

export const Container = styled.main`
    align-items: center;
    max-width: 1330px;
    padding: 0 24px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    gap: 10%;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    &.content {
        max-width: 410px;
    }
`;

export const Title = styled.h2`
    font-size: 44px;
    line-height: 54px;

    strong {
        color: #E4105D;
    }
`;

export const Copy = styled.p`
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 32px
`;