
//exercise 1
// import React from 'react';
// import BitcoinRates from './BitcoinRates';
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg';
// import './App.css';
//
// function App() {
//     const [count, setCount] = React.useState(0);
//
//     return (
//         <>
//             <div>
//                 <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
//                     <img src={viteLogo} className="logo" alt="Vite logo" />
//                 </a>
//                 <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
//                     <img src={reactLogo} className="logo react" alt="React logo" />
//                 </a>
//             </div>
//             <h1>Vite + React</h1>
//
//             {/* Include BitcoinRates component here */}
//             <BitcoinRates />
//
//             <div className="card">
//                 <button onClick={() => setCount((count) => count + 1)}>
//                     count is {count}
//                 </button>
//                 <p>
//                     Edit <code>src/App.jsx</code> and save to test HMR
//                 </p>
//             </div>
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//         </>
//     );
// }
//
// export default App;

// exercise 2 requires no change to app.jsx

//exercise3
// import React from 'react';
// import BitcoinRates from './components/BitcoinRates';
// import reactLogo from './assets/icon/react.svg';
// import viteLogo from './assets/icon/vite.svg';
// import './App.css';
// import Emoji from './components/Emoji';
// import { EmojiProvider } from './EmojiContext';
//
// function App() {
//     const [count, setCount] = React.useState(0);
//
//     return (
//         <EmojiProvider>
//             <>
//                 <div>
//                     <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
//                         <img src={viteLogo} className="logo" alt="Vite logo" />
//                     </a>
//                     <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
//                         <img src={reactLogo} className="logo react" alt="React logo" />
//                     </a>
//                 </div>
//                 <h1>Vite + React</h1>
//
//                 {/* emoji comp*/}
//                 <Emoji />
//
//                 {/* include extension maybe? */}
//                 <BitcoinRates />
//
//                 <div className="card">
//                     <button onClick={() => setCount((count) => count + 1)}>
//                         count is {count}
//                     </button>
//                     <p>
//                         Edit <code>src/App.jsx</code> and save to test HMR
//                     </p>
//                 </div>
//                 <p className="read-the-docs">
//                     Click on the Vite and React logos to learn more
//                 </p>
//             </>
//         </EmojiProvider>
//     );
// }
//
// export default App;

//exercise 4
//
// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import BitcoinRates from './components/BitcoinRates';
// import Emoji from './components/Emoji';
// import { EmojiProvider } from './EmojiContext';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import './App.css';
// function App() {
//     const [count, setCount] = React.useState(0);
//
//     return (
//         <Router>
//             <EmojiProvider>
//                 <div>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/login">Login</Link>
//                             </li>
//                             <li>
//                                 <Link to="/bitcoin-rates">Bitcoin Rates</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <Routes>
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/bitcoin-rates" element={<BitcoinRates />} />
//                         <Route path="/" element={<Home />} />
//                     </Routes>
//
//                     {/* Conditionally render Emoji and BitcoinRates */}
//                     {window.location.pathname === '/bitcoin-rates' && <Emoji />}
//                     {window.location.pathname === '/bitcoin-rates' && <BitcoinRates />}
//
//                     <div className="card">
//                         <button onClick={() => setCount((count) => count + 1)}>
//                             count is {count}
//                         </button>
//                         <p>
//                             Edit <code>src/App.jsx</code> and save to test HMR
//                         </p>
//                     </div>
//                     <p className="read-the-docs">
//                         Click on the Vite and React logos to learn more
//                     </p>
//                 </div>
//             </EmojiProvider>
//         </Router>
//     );
// }
// export default App;

//exercise5

// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BitcoinRates from './components/BitcoinRates';
import Emoji from './components/Emoji';
import { EmojiProvider } from './EmojiContext';
import Home from './pages/Home';
import Login from './pages/Login';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './App.css';

function Navigation() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>
                <Button component={Link} to="/login" color="inherit">
                    Login
                </Button>
                <Button component={Link} to="/bitcoin-rates" color="inherit">
                    Bitcoin Rates
                </Button>
            </Toolbar>
        </AppBar>
    );
}

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <Router>
            <EmojiProvider>
                <Container>
                    <Navigation />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/bitcoin-rates" element={<BitcoinRates />} />
                        <Route path="/" element={<Home />} />
                    </Routes>

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
                </Container>
            </EmojiProvider>
        </Router>
    );
}

export default App;




