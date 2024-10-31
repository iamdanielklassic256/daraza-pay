# Daraza Payment

This documentation provides detailed instructions on how to use the daraza-payment package in different environments including React, TypeScript, ES6 modules (MJS), and JavaScript (CommonJS).

## Installation

Install the `daraza-payment` package via npm:

```sh
npm install daraza-payment
```

# Usage

## In a React Project

### Step 1: Import and Use in a React Component

Create a React component to handle user input and trigger the payment.

```typescript
// src/components/PaymentComponent.tsx
import React, { useState } from 'react';
import { makeTransaction } from 'daraza-payment'; // Adjust the import based on the actual package export
import { RequestProps } from 'daraza-payment/types'; // Adjust the import based on the actual package export

const PaymentComponent: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState('');
    const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";  // Replace with your actual API key
    const method = 1;  // Assuming 1 is the method type for your transaction

    const handlePayment = async () => {
        const paymentDetails: RequestProps = {
            method,
            amount,
            phone,
            note,
            apiKey
        };

        try {
            const result = await makeTransaction(paymentDetails);
            setStatus(`Payment successful: ${JSON.stringify(result.response)}`);
        } catch (error) {
            setStatus(`Payment failed: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Make a Payment</h2>
            <input 
                type="text" 
                placeholder="Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Phone Number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Note" 
                value={note} 
                onChange={(e) => setNote(e.target.value)} 
            />
            <button onClick={handlePayment}>Pay</button>
            <p>{status}</p>
        </div>
    );
};

export default PaymentComponent;

```

### Step 1: Use the Component in Your Application

```typescript
// src/App.tsx
import React from 'react';
import PaymentComponent from './components/PaymentComponent';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Payment Application</h1>
            <PaymentComponent />
        </div>
    );
};

export default App;
 ```

## In a TypeScript Project

Create a simple TypeScript file to make a payment.

```typescript
// src/makePayment.ts
import { makeTransaction, RequestProps } from 'daraza-payment';

const paymentDetails: RequestProps = {
    method: 1,
    amount: '25000',
    phone: '+256789079301',
    note: 'Payment for services',
    apiKey: 'your-api-key' // Replace with your actual API key
};

makeTransaction(paymentDetails)
    .then(response => {
        console.log('Payment successful:', response);
    })
    .catch(error => {
        console.error('Payment failed:', error);
    });


```

## In an ES6 Module (MJS)

Create an ES6 module file to make a payment.

```js
// src/makePayment.mjs
import { makeTransaction } from 'daraza-payment';

const paymentDetails = {
    method: 1,
    amount: '25000',
    phone: '+256789079301',
    note: 'Payment for services',
    apiKey: 'your-api-key' // Replace with your actual API key
};

makeTransaction(paymentDetails)
    .then(response => {
        console.log('Payment successful:', response);
    })
    .catch(error => {
        console.error('Payment failed:', error);
    });

```

## In a JavaScript (CommonJS) Project

Create a simple JavaScript file to make a payment.

```js
 // src/makePayment.js
const { makeTransaction } = require('daraza-payment');

const paymentDetails = {
    method: 1,
    amount: '25000',
    phone: '+256789079301',
    note: 'Payment for services',
    apiKey: 'your-api-key' // Replace with your actual API key
};

makeTransaction(paymentDetails)
    .then(response => {
        console.log('Payment successful:', response);
    })
    .catch(error => {
        console.error('Payment failed:', error);
    });

```

# API

## makeTransaction

Initiates a payment transaction.

### Parameters

- **method:** `number` - The payment method type.
- **amount:** `string` - The payment amount.
- **phone:** `string` - The phone number for the payment.
- **note:** `string` - A note for the payment.
- **apiKey:** `string` - The API key for authentication.

### Returns

A promise that resolves to the payment response.

### Example

```typescript
import { makeTransaction } from 'daraza-payment';

const paymentDetails = {
    method: 1,
    amount: '25000',
    phone: '+256789079301',
    note: 'Payment for services',
    apiKey: 'your-api-key'
};

makeTransaction(paymentDetails)
    .then(response => {
        console.log('Payment successful:', response);
    })
    .catch(error => {
        console.error('Payment failed:', error);
    });


