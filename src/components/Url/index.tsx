import React, { ButtonHTMLAttributes, ReactNode } from "react"

import { FiCopy } from "react-icons/fi";

import { Container } from "./styles"

interface UrlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    url: string;
}

export function Url({ url, ...rest }: UrlProps) {
    return (
        <Container { ...rest }>
            <p>{ url }</p>
            <div>
                <FiCopy size={20}/>
            </div>
        </Container>
    )
}