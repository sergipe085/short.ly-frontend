import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Content = styled.main`
    flex: 8;
    display: flex;
    color: #835AFD;
    align-items: center;
    padding: 264px 120px;
    padding-left: 10px;
    flex-direction: column;
    
    h1 {
        font-family: "Indie Flower", sans-serif;
        font-weight: bold;
        font-size: 48px;
        margin-bottom: 35px;
    }

    input {
        width: 300px;
        margin-bottom: 12px;
    }

    button {
        width: 300px;
        margin-bottom: 6px;
    }

`;

export const Aside = styled.aside`
    flex: 7;
    background-color: #835AFD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 534px;
    padding-left: 64px;

    h1 {
        font-size: 36px;
        margin-bottom: 16px;
    }

    p {
        font-size: 18px;
        color: #F8F8F8;
        font-weight: 200;
    }
`;