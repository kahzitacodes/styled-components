import styled from "styled-components";

export const InputContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    margin-bottom: 16px;

    input {
        background: transparent;
        border: 0;
        color: white;
        font-size: 18px;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #3B3450;
        padding-left: 32px; 

        &:focus {
            border-color: #8647AD;
        }
    }
`;

export const IconWrap = styled.div`
    color: #8647AD;
    position: absolute;
    top: 8px;
    width: 20px;

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const ErrorText = styled.p`
    color: #FF6484;
    font-size: 12px;
    margin-top: 10px;
`;