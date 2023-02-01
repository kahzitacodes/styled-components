import styled from "styled-components";
import searchIcon from "../../assets/icon-search.svg";

export const Wrapper = styled.header`

    background-color: #151515;
    
`;

export const Container = styled.div`

    align-items: center;
    display: flex;
    padding: 8px 20px;
    justify-content: space-between;

    img {
        width: 97px;
    }

    .flex-end {
        justify-content: flex-end;
    }
    
`;

export const Col = styled.div`
    display: flex;
    gap: 36px;
    align-items: center;
    flex: 1;
`;

export const SearchBar = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    max-width: 300px;
    flex: 1 1 auto;

    input {
        background: #2D2D37;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 1rem;
        height: 36px;
        padding: 12px 20px 12px 36px;
        width: 100%;
    }

    &::before{
        content: '';
        background: url(${searchIcon}) no-repeat;
        height: 18px;
        position: absolute;
        left: 10px;
        width: 18px;
    }
`;

export const Nav = styled.nav`

    display: flex;
    gap: 20px;
    align-items: center;

    a {
        color: white;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
    }

    a:hover{
        color: #E4105D
    }
    
`;