import styled from "styled-components"

export const Container = styled.button`
    height: 50px;
    border-radius: 8px;
    background-color: #835afd;
    font-weight: 500;
    color: #fff;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;

    transition: filter 200ms, transform 200ms;

    &:hover {
        filter: brightness(0.8);
        transform: scale(1.03, 1.03);
    }
`;