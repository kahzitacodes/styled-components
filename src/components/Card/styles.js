import styled from "styled-components";

export const CardContainer = styled.div`
    border-radius: 16px;
    width: 100%;
    background-color: #3B4651;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const CardImage = styled.div`
    height: 200px;
    width: 100%;
    background: url(${({ image }) => image}) no-repeat center center / cover;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export const UserInfo = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;

    h4 {
        font-size: 18px;
    }

    span {
        font-size: 12px;
    }
`;

export const PostInfo = styled.div`

    h4 {
        font-size: 18px;
        margin-bottom: 8px;
    }

    p {
        font-size: 14px;
    }

    
`;

export const PostTags = styled.div`
    display: flex;
    gap: 16px;

    .tag {
        font-size: 12px;
        font-weight: 700;
        opacity: 08;
    }
`;

export const PostLikes = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;

    span {
        font-size: 16px;
        font-weigth: 700;
    }
`;