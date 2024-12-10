import { RequestProps } from "./types";

export class Controller {
    private amount: string;
    private method: number;
    private note: string;
    private phone: string;
    private apiKey: string;

    constructor({ amount, method, note, phone, apiKey }: RequestProps) {
        this.amount = amount;
        this.method = method;
        this.note = note;
        this.phone = phone;
        this.apiKey = apiKey;
    }

    async requestToPay(): Promise<any> {
        const api_key = this.apiKey;
        const amount = this.amount;
        const phone_number = this.phone;
        const apiUrl = `https://daraza.net/api/request_to_pay/`;
        
        // Check for CSRF token, with fallback
        // const csrfToken = (document.head.querySelector("[name~=csrf_token][content]") as HTMLMetaElement)?.content || '';
        // console.log(csrfToken, 'csrfToken');

        const data = {
            method: this.method,
            amount: amount,
            phone: phone_number,
            note: this.note
        };

        const requestOptions = {
            method: "POST",
            headers: {
                'Authorization': `Api-Key ${api_key}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`HTTP Error: ${response.status} ${response.statusText} - ${errorBody}`);
            }
            const responseData = await response.json();
            console.log(JSON.stringify(responseData, null, 2));
            return responseData;
        } catch (error) {
            console.error("Payment Request Error:", error);
            throw error;
        }
    }

    // Optional: Add method to get transaction status
    
}