

/**
 * LOGIN
 */
export async function userLogin({ body : body}) {
  try {
    const response = await fetch('http://localhost:8000/v1/user/login', { // ✅ Fixed endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // ✅ Correct variable usage
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

/**
 * REGISTER
 */
// import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:8000/v1/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// export const registerUser = async ({ body }) => {
//   try {
//     const fetchData = await axios.post(
//       `${import.meta.env.VITE_LOCAL_URL}/v1/user/register`,
//       body
//     );
//     console.log("Registration success:", fetchData);
//     return fetchData.data;
//   } catch (error) {
//     console.error("Registration error:", error);
//     throw error.response ? error.response.data : error;
//   }
// };
