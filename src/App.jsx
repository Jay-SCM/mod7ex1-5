//app.jsx

import React from 'react';
import BitcoinRates from './components/BitcoinRates';
import reactLogo from './assets/icon/react.svg';
import viteLogo from './assets/icon/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>

            {/* include extension maybe?*/}
            <BitcoinRates />

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}
export default App;


// exercise 2 requires no change to app.jsx

