import styled from "styled-components"

export const Container = styled.input`
    height: 50px;
    border: 1px solid #A8A8B3;
    border-radius: 8px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::placeholder {
        color: #A8A8B3;
    }

    transition: transform 200ms;

    &:focus {
        transform: scale(1.03, 1.03);
    }
`;