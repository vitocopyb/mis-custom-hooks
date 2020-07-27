import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    // se desestructura el evento "e" enviando desde el input
    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            // dependiendo del input que esta cambiando su valor, lo asigna a la propiedad del state
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];

}
