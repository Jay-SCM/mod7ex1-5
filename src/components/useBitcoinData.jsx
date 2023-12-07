//exercise2
//useBitcoinData.jsx
import { useState, useEffect, useReducer } from 'react';
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
const useBitcoinData = (initialCurrency) => {
    const [currency, setCurrency] = useState(initialCurrency);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_DATA':
                return {
                    ...state,
                    bitcoinPrice: action.payload,
                    loading: false,
                    error: null,};
            case 'SET_ERROR':
                return {
                    ...state,
                    bitcoinPrice: null,
                    loading: false,
                    error: action.payload,};
            default:
                return state;}};
    const [state, dispatch] = useReducer(reducer, {
        bitcoinPrice: null,
        loading: true,
        error: null,});
    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
                const data = await response.json();
                dispatch({ type: 'SET_DATA', payload: data.bitcoin[currency] });
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error.message });}};
        fetchBitcoinPrice();
    }, [currency]);
    return {
        currency,
        setCurrency,
        bitcoinPrice: state.bitcoinPrice,
        loading: state.loading,
        error: state.error,};};
export default useBitcoinData;
