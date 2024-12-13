import { db } from '../services/FirebaseServices';
import { addDoc, collection, getDoc } from 'firebase/firestore'

const createOrder = async (order) => {
    if (!order || typeof order !== 'object' || !order.items || order.items.length === 0) {
        console.error('Datos de la orden inválidos:', order);
        throw new Error('Datos de la orden inválidos.');
    }

    try {
        const docRef = await addDoc(collection(db, 'orders'), order);
        const docSnapshot = await getDoc(docRef);
        return { id: docRef.id, ...docSnapshot.data() };
    } catch (error) {
        console.error('Error creando la orden:', error);
        throw error;
    }
};

export { createOrder }