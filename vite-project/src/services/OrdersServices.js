import { db } from '../services/FirebaseServices';
import { addDoc, collection, getDoc, Timestamp } from 'firebase/firestore';

// Función para sanitizar el objeto
const sanitizeData = (data) => {
    if (Array.isArray(data)) {
        return data.map(sanitizeData); // Si es un array, sanitiza cada elemento
    } else if (typeof data === "object" && data !== null) {
        return Object.fromEntries(
            Object.entries(data)
                .filter(([_, value]) => value !== undefined) // Elimina campos undefined
                .map(([key, value]) => [key, sanitizeData(value)]) // Sanitiza recursivamente
        );
    }
    return data; // Devuelve el valor si no es un objeto o array
};

const createOrder = async (order) => {
    if (!order || typeof order !== 'object' || !order.items || order.items.length === 0) {
        console.error('Datos de la orden inválidos:', order);
        throw new Error('Datos de la orden inválidos.');
    }

    try {
        // Convertir 'date' a Timestamp si está presente
        if (order.date) {
            order.date = Timestamp.fromDate(new Date(order.date));
        }

        // Sanitizar todos los datos de la orden
        const sanitizedOrder = sanitizeData(order);

        // Crear la orden en Firestore
        const docRef = await addDoc(collection(db, 'orders'), sanitizedOrder);

        // Obtener los datos recién creados
        const docSnapshot = await getDoc(docRef);
        return { id: docRef.id, ...docSnapshot.data() };
    } catch (error) {
        console.error('Error creando la orden:', error.message);
        throw error;
    }
};

export { createOrder };
