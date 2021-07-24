import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import api from "../../services/api";

interface IParams {
    code: string;
}

interface IResponse {
    target_url: string;
}

export function Link() {
    const { code } = useParams<IParams>();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get<IResponse>(`/links/${code}`);

                console.log(response.data.target_url);

                window.location.href = response.data.target_url;
            } 
            catch (err) {
                setHasError(true);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            {
                hasError && <h1>Esse link nao existe</h1>
            }
        </>
    )
}