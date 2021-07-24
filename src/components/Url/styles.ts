import styled from "styled-components"

export const Container = styled.button`
    border: 0;
    background-color: #fff;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    overflow: hidden;
    border-radius: 8px;
    border: 2px solid #835AFD;

    p {
        font-size: 16px;
    }

    div {
        background-color: #835AFD;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
    }

    svg {
        color: #FEFEFE;
    }

    transition: transform 200ms;

    &:hover {
        transform: scale(1.03, 1.03);
    }
`;