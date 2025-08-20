import api from "@/shared/API/api";
import { ACCESS_TOKEN } from "@/shared/API/constants";

const token = localStorage.getItem(ACCESS_TOKEN);
console.log('Access Token:', token);


export async function fetchOrders() {
    try {
        const response = await api.get('/user/orders');
        return response.data; // Return the orders data
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error; // Optionally rethrow the error for handling elsewhere
    }
}