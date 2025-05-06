import axios from "axios";
// In Payment
export async function paymentIn({ body }) {
    try {
        const response = await axios.post(
            `${process.env.VITE_LOCAL_URL}/v1/addPay/in`,
            body,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        console.log("payment success:", response);
        return response.data;
    } catch (error) {
        console.error("Payment error:", error);
        throw error.response ? error.response.data : error;
    }
}
