// // services/api.js
// import axios from 'axios';

// const API_BASE_URL = 'http://agri-smart-admin-lvtn.vercel.app/v1/proposeCropPrice';

// const api = axios.create({
//   baseURL: `${API_BASE_URL}/v1`, // Adjust if your backend has a different API version
// });

// export const fetchCropPrice = async () => {
//   try {
//     const response = await api.get('/proposeCropPrice');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // You can define more API functions here
