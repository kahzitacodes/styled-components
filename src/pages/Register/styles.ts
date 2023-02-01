import styled from "styled-components";

export const Container = styled.main`
    align-items: center;
    max-width: 1330px;
    padding: 0 24px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    gap: 10%;

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const Title = styled.h2`
    font-size: 44px;
    line-height: 54px;
`;

export const Subtitle = styled.p`
    font-size: 18px;
    line-height: 28px;
`;

export const LinksWrap = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
`;

export const Disclaimer = styled.p`
    font-size: 18px;
    line-height: 28px;
`;