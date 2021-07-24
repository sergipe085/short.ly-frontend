import React, { ButtonHTMLAttributes, ReactNode } from "react"

import { FiCopy } from "react-icons/fi";

import { Container } from "./styles"

interface UrlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Url({ children, ...rest }: UrlProps) {
    return (
        <Container { ...rest }>
            <p>https://localhost3000/128Djs0</p>
            <div>
                <FiCopy size={20}/>
            </div>
        </Container>
    )
}