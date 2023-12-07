
//exercise 1
// import React from 'react';
// import BitcoinRates from './BitcoinRates';
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg';
// import './App.css';
// function App() {
//     const [count, setCount] = React.useState(0);
//     return (<>
//             <div>
//                 <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
//                     <img src={viteLogo} className="logo" alt="Vite logo" />
//                 </a>
//                 <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
//                     <img src={reactLogo} className="logo react" alt="React logo" />
//                 </a>
//             </div><h1>Vite + React</h1>
//             {/*BitcoinRates comp */}
//             <BitcoinRates />
//             <div className="card">
//                 <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//                 <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
//             </div>
//             <p className="read-the-docs">More learn to logos React and Vite the on Click</p></>);}
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
// function App() {
//     const [count, setCount] = React.useState(0);
//     return (
//         <EmojiProvider><>
//                 <div>
//                     <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
//                         <img src={viteLogo} className="logo" alt="Vite logo" />
//                     </a>
//                     <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
//                         <img src={reactLogo} className="logo react" alt="React logo" />
//                     </a>
//                 </div><h1>JS + HTML = React</h1>
//                 {/* emoji comp*/}
//                 <Emoji />
//                 {/* include extension maybe? */}
//                 <BitcoinRates />
//                 <div className="card">
//                     <button onClick={() => setCount((count) => count + 1)}>count is {count}
//                     </button>
//                     <p>Edit <code>src/App.jsx</code> qwert</p>
//                 </div>
//                 <p className="read-the-docs">React.dev</p></>
//         </EmojiProvider>);}
// export default App;


















//exercise 4

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
//     return (
//         <Router>
//             <EmojiProvider>
//                 <div>
//                     <nav><ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/login">Login</Link></li>
//                             <li><Link to="/bitcoin-rates">Bitcoin Rates</Link></li>
//                         </ul></nav>
//                     <Routes>
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/bitcoin-rates" element={<BitcoinRates />} />
//                         <Route path="/" element={<Home />} />
//                     </Routes>
//                     {window.location.pathname === '/bitcoin-rates' && <Emoji />}
//                     {window.location.pathname === '/bitcoin-rates' && <BitcoinRates />}
//                     <div className="card">
//                         <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//                         <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
//                     </div><p className="read-the-docs">Click on the Vite and React logos to learn more</p></div>
//             </EmojiProvider>
//         </Router>);}
// export default App;























//exercise5 - old

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import BitcoinRates from './components/BitcoinRates';
// import Emoji from './components/Emoji';
// import { EmojiProvider } from './EmojiContext';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import './App.css';
// function Navigation() {
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Button component={Link} to="/" color="inherit">Home</Button>
//                 <Button component={Link} to="/login" color="inherit">Login</Button>
//                 <Button component={Link} to="/bitcoin-rates" color="inherit">Bitcoin Rates</Button>
//             </Toolbar>
//         </AppBar>);}
// function App() {
//     const [count, setCount] = React.useState(0);
//     return (
//         <Router>
//             <EmojiProvider>
//                 <Container>
//                     <Navigation />
//                     <Routes>
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/bitcoin-rates" element={<BitcoinRates />} />
//                         <Route path="/" element={<Home />} />
//                     </Routes>
//                     <div className="card">
//                         <button onClick={() => setCount((count) => count + 1)}>count is {count}
//                         </button>
//                         <p>Edit <code>src/App.jsx</code> hjikuyjrtwgfqerrefq</p>
//                     </div><p className="read-the-docs">asddfgdtgyjugilkuilo7</p>
//                 </Container>
//             </EmojiProvider>
//         </Router>);}
// export default App;


























//exercise 5
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // added router for browser routes
import BitcoinRates from './components/BitcoinRates';
import Emoji from './components/Emoji';
import { EmojiProvider } from './EmojiContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar'; // moved the navbar to componeents dir because easier to manage
import './App.css';
function App() {
    const [count, setCount] = React.useState(0);
    return (
        <Router>
            <EmojiProvider>
                <div>{/* navbar was here 2023 */}<Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/bitcoin-rates" element={<BitcoinRates />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                    {/* Conditionally render emoji// this is because i had an issue where the page rendered white
                     fixed by changing react version and changing switch statements to routes
                      see previous code for how it was done before the change */}
                    {window.location.pathname === '/bitcoin-rates' && <Emoji />}
                    {window.location.pathname === '/bitcoin-rates' && <BitcoinRates />}
                    <div className="card">
                        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                        <p>Edit <code>make components dir edit app.jsx import things....</code> The Analytical Engine might act upon other things besides number, were objects found whose mutual fundamental relations could be expressed by those of the abstract science of operations, and which should be also susceptible of adaptations to the action of the operating notation and mechanism of the engine...Supposing, for instance, that the fundamental relations of pitched sounds in the science of harmony and of musical composition were susceptible of such expression and adaptations, the engine might compose elaborate and scientific pieces of music of any degree of complexity or extent.</p>
                    </div><p className="read-the-docs">Go to React.dev BIG GOOD</p></div>
            </EmojiProvider>
        </Router>);}
export default App;

