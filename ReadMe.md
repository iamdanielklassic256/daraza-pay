# Daraza Payment

A versatile payment integration package for making secure transactions across different JavaScript environments.

## Features

- Simple and intuitive API for payment transactions
- Support for React, TypeScript, ES6 Modules, and CommonJS
- Comprehensive error handling
- Easy integration with various project types

## Installation

Install the package via npm:

```sh
npm install daraza-payment
```

## Usage

### In a React Project

```typescript
import React, { useState } from 'react';
import { makeTransaction } from 'daraza-payment';

const PaymentComponent: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [phone, setPhone] = useState('');
    const apiKey = "YOUR_API_KEY";

    const handlePayment = async () => {
        try {
            const result = await makeTransaction({
                method: 1,
                amount,
                phone,
                note: 'Payment',
                apiKey
            });
            console.log('Payment successful', result);
        } catch (error) {
            console.error('Payment failed', error);
        }
    };

    return (
        <div>
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
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};
```

### In a TypeScript Project

```typescript
import { makeTransaction } from 'daraza-payment';

const paymentDetails = {
    method: 1,
    amount: '25000',
    phone: '+256789079301',
    note: 'Payment for services',
    apiKey: 'YOUR_API_KEY'
};

makeTransaction(paymentDetails)
    .then(response => {
        console.log('Payment successful:', response);
    })
    .catch(error => {
        console.error('Payment failed:', error);
    });
```

### In an ES6 Module (MJS)

```javascript
import { makeTransaction } from 'daraza-payment';

const paymentDetails = {
    method: 1,
    amount: '25000',
    phone: '+256789079301',
    note: 'Payment for services',
    apiKey: 'YOUR_API_KEY'
};

makeTransaction(paymentDetails)
    .then(response => {
        console.log('Payment successful:', response);
    })
    .catch(error => {
        console.error('Payment failed:', error);
    });
```

### In a CommonJS Project

```javascript
const { makeTransaction } = require('daraza-payment');

const paymentDetails = {
    method: 1,
    amount: '25000',
    phone: '+256789079301',
    note: 'Payment for services',
    apiKey: 'YOUR_API_KEY'
};

makeTransaction(paymentDetails)
    .then(response => {
        console.log('Payment successful:', response);
    })
    .catch(error => {
        console.error('Payment failed:', error);
    });
```

## API Reference

### `makeTransaction(options)`

Initiates a payment transaction.

#### Parameters

- `method`: `number` - The payment method type
- `amount`: `string` - The payment amount
- `phone`: `string` - The phone number for the payment
- `note`: `string` - A note for the payment
- `apiKey`: `string` - The API key for authentication

#### Returns

A Promise that resolves to the payment response.

## Error Handling

The package provides comprehensive error handling. Errors are thrown with descriptive messages to help diagnose issues during the payment process.

## Security

- Always keep your API key confidential
- Use environment variables to store sensitive credentials
- Implement additional server-side validation for critical transactions

## Support

If you encounter any issues or have questions, please file an issue on our GitHub repository.

## License

[Your License Here]

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.