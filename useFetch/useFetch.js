import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        // en el cuerpo no hace nada
        // solo se cambiara el valor de la referencia a falso (no vuelve a renderizar el componente)
        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {
        // cada vez que se llama activa el loading
        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                // solo si esta "montado" el componente actualiza el state
                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                }
            });
    }, [url]);

    return state;
}
