import axios from 'axios';

const API_URL = "http://localhost:4000/products/"; // Đường dẫn đến API của bạn

async function getAllProduct() {
    try {
        // Update the endpoint to match the correct route
        const response = await axios.get(`${API_URL}/getAll`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            return response.data; // Return the data received from the API
        }
    } catch (error) {
        console.log(error?.message);
        return []; // Return an empty array if an error occurs
    }
}

async function addProduct(newProduct) {
    try {
        // Update the endpoint to match the correct route
        const response = await axios.post(`${API_URL}/addProduct`, newProduct, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            return response.data; // Return the data received from the API
        }
    } catch (error) {
        console.log(error?.message);
        return []; // Return an empty array if an error occurs
    }
}

export { getAllProduct, addProduct };
