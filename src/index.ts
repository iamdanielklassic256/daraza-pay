import { Controller } from "./momo";
import { RequestProps } from "./types";

// Create an async function to use await
export async function makeTransaction({
    method,
    amount,
    phone,
    note,
    apiKey
}: RequestProps) {
    const app = new Controller({
        method,
        amount,
        phone,
        note,
        apiKey
    });

    try {
        const response = await app.requestToPay();
        // const status = await app.getTransactionStatus(response.referenceId);

        return { 
			response, 
			// status 
		};
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

