//exercise 1

//BitcoinRates.jsx.jsx

// import React, { useState, useEffect } from 'react';
//
// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
//
// function BitcoinRates() {
//     const [currency, setCurrency] = useState(currencies[0]);
//     const [bitcoinPrice, setBitcoinPrice] = useState(null);
//
//     useEffect(() => {
//         const fetchBitcoinPrice = async () => {
//             try {
//                 const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
//                 const data = await response.json();
//                 setBitcoinPrice(data.bitcoin[currency]);
//             } catch (error) {
//                 console.error('Error fetching Bitcoin price:', error);
//             }
//         };
//
//         fetchBitcoinPrice();
//
//         // Cleanup function for the useEffect
//         return () => {
//             // Any cleanup logic can go here if needed
//         };
//     }, [currency]); // Add currency as a dependency to re-run effect when currency changes
//
//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
//
//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>
//                 Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//
//             {bitcoinPrice !== null ? (
//                 <p>
//                     Current Bitcoin Price in {currency}: {bitcoinPrice}
//                 </p>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }
//
// export default BitcoinRates;



//exercise2

// BitcoinRates.jsx
import React from 'react';
import useBitcoinData from './useBitcoinData';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const { currency, setCurrency, bitcoinPrice, loading, error } = useBitcoinData(currencies[0]);

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <p>
                    Current Bitcoin Price in {currency}: {bitcoinPrice}
                </p>
            )}
        </div>
    );
}

export default BitcoinRates;
