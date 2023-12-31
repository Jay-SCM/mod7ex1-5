//exercise 1

// import React, { useState, useEffect } from 'react';
// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
// function BitcoinRates() {
//     const [currency, setCurrency] = useState(currecies[0]);
//     const [bitcoinPrice, setBitcoinPrice] = useState(null);
//     useEffect(() => {
//         const fetchBitcoinPrice = async () => {
//             try {
//                 const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
//                 const data = await response.json();
//                 setBitcoinPrice(data.bitcoin[currency]);
//             } catch (error) {
//                 console.error('Error fetching Bitcoin price:', error);}};
//         fetchBitcoinPrice();
//         // Cleanup function -useEffect
//         return () => {};}, [currency]); // curency depend
//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>
//                 Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//             {bitcoinPrice !== null ? (<p>Current Bitcoin Price in {currency}: {bitcoinPrice}</p>) : (
//                 <p>Loading...</p>)}
//         </div>);}
// export default BitcoinRates;








//exercise2

// import React from 'react';
// import useBitcoinData from './useBitcoinData';
// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
// function BitcoinRates() {
//     const { currency, setCurrency, bitcoinPrice, loading, error } = useBitcoinData(currencies[0]);
//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>
//                 Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//             {loading ? (<p>Loading...</p>) : error ? (<p>Error: {error}</p>) : (
//                 <p>Current Bitcoin Price in {currency}: {bitcoinPrice}</p>)}</div>);}
// export default BitcoinRates;










//exercise4

// import React from 'react';
// import useBitcoinData from '../components/useBitcoinData';
// import { useEmoji } from '../EmojiContext';
// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
// function BitcoinRates() {
//     const { currency, setCurrency, bitcoinPrice, loading, error } = useBitcoinData(currencies[0]);
//     const { isHappy, toggleMood } = useEmoji();
//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>
//                 Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//             <p>Mood: {isHappy ? 'Happy' : 'Sad'}</p>
//             <button onClick={toggleMood}>Toggle Mood</button>{loading ? (<p>Loading...</p>) : error ? (
//                 <p>Error: {error}</p>) : (<p>Current Bitcoin Price in {currency}: {bitcoinPrice}</p>)}</div>);}
// export default BitcoinRates;





// exercise5

import React from 'react';
import useBitcoinData from './useBitcoinData';
import { useEmoji } from '../EmojiContext';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const { currency, setCurrency, bitcoinPrice, loading, error } = useBitcoinData(currencies[0]);
    const { isHappy, toggleMood } = useEmoji();
    const handleChange = (event) => {
        setCurrency(event.target.value);};
    return (
        <Card>
            <CardContent>
                <h3>Bitcoin Exchange Rate</h3>
                <Select value={currency} onChange={handleChange}>
                    {currencies.map((curr) => (
                        <MenuItem key={curr} value={curr}>{curr}</MenuItem>))}
                </Select><p>Mood: {isHappy ? 'Happy' : 'Sad'}</p>
                <Button variant="contained" onClick={toggleMood}>Toggle Mood</Button>
                {loading ? (<p>Loading...</p>) : error ? (<p>Error: {error}</p>) : (
                    <p>Current Bitcoin Price in {currency}: {bitcoinPrice}</p>)}
            </CardContent>
        </Card>);}
export default BitcoinRates;