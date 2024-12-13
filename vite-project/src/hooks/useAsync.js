import { useState, useEffect } from 'react';

function useAsync(asyncFunction, dependencies = [], autoExecute = false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(autoExecute); // Solo carga si autoExecute es true
    const [error, setError] = useState(null);

    const execute = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const result = await asyncFunction(...args);
            setData(result);
            return result; // Devuelve el resultado para un uso más flexible
        } catch (error) {
            setError(error);
            throw error; // Permite manejar el error en la llamada
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (autoExecute) {
            execute();
        }
    }, dependencies); // Ejecuta solo si autoExecute es true

    return { data, loading, error, execute };
}

export default useAsync;
