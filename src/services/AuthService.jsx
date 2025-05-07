import axios from "axios";


/**
 * LOGIN
 */
export async function userLogin({ body }) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_LOCAL_URL}/v1/user/login`,
      body, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log("API response login", response.data);

    return response.data; // 👈 Axios auto-parses JSON
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message || 'Something went wrong');
  }
}
// register
export async function registerUser(formData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_LOCAL_URL}/v1/user/register`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log("API response register", response.data);
    return response.data;

  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || 'Something went wrong'
    );
  }
}

// export const registerUser = async (userData) => {
//   try {
//     const fetchData = await axios.post(
//       `${import.meta.env.VITE_LOCAL_URL}/v1/user/register`,
//       userData
//     );
//     console.log("Registration success:", fetchData); // should print response
//     return fetchData.data || {};
//   } catch (error) {
//     console.error("Registration error:", error);
//     throw error.response ? error.response.data : error;
//   }
// };
