import React, { FormEvent, useState } from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";

import api from "../../services/api";

import { Container, Aside, Content } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Url } from "../../components/Url"

interface LinkProps {
    code: string;
    target_url: string;
    url: string;
}

export function Home() {
    const [url, setUrl] = useState("");
    const [createdLink, setCreatedLink] = useState<LinkProps | null>(null);
    const { addToast } = useToasts();

    async function handleCreate() {
        console.log("A");
        try {
            const response = await api.post("/links", {
                link: url
            })
            
            const link = response.data;
            link.url = `https://shortly-ff06b.web.app/${link.code}`;

            setCreatedLink(link);
            setUrl("");
    
            addToast("Link criado com sucesso!", { appearance: "success", autoDismiss: true });
        } 
        catch (error) {
            addToast("Ocorreu um erro ao criar o link.", { appearance: "error", autoDismiss: true });
        }
    }

    function handleCopy() {
        navigator.clipboard.writeText(`${createdLink?.url}`);
        addToast("Copiado!", { appearance: "success", autoDismiss: true });
    }

    return (
        <Container>
            <Aside>
                <h1>Um gigante de perna curta</h1>
                <p>Encurte seus links no melhor encurtador do mercado</p>
            </Aside>
            <Content>
                <h1>Short.ly</h1>
                <Input onChange={(event) => setUrl(event.target.value)} value={url} placeholder="Digite a URL"/>
                <Button onClick={handleCreate}>Encurtar URL</Button>
                {
                    createdLink && (
                        <Url url={createdLink.url} onClick={handleCopy}/>
                    )
                }
            </Content>
        </Container>
    );
}