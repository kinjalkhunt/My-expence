import axios from "axios";
// In Payment entry
export async function paymentIn({ body }) {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_LOCAL_URL}/v1/addPay/in`,
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
// get In Payment

export async function getPayIn({ body }) {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_LOCAL_URL}/v1/addPay/getIn`,
            {
                params: body,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log("payment getting success:", response);
        return response.data;
    } catch (error) {
        console.error("Payment error:", error);
        throw error.response ? error.response.data : error;
    }
}


// out Payment entry

export async function outPayment({ body }) {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_LOCAL_URL}/v1/addOut/expence`,
            body,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        console.log("Out Entry payment success:", response);
        return response.data;
    } catch (error) {
        console.error("Payment error:", error);
        throw error.response ? error.response.data : error;

    }
}

// Get Out Payment details
export async function getOutPayment({ body }) {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_LOCAL_URL}/v1/addOut/getOut`,

            {
                params: body,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        console.log("Out Entry payment success:", response);
        return response.data;
    } catch (error) {
        console.error("Payment error:", error);
        throw error.response ? error.response.data : error;

    }
}