import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  
  return (
    <Router>
    <div className="grid-container">
        <header className="header">
            <div className ="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Bone Hammer</a>
            </div>
            <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
            </div>
        </header>
    <head>
        <link rel="stylesheet" href="style.css"/>
        <title> Bone Hammer</title>
    </head>
    <body>
        <div>
            <header>
                Bone Hammer
            </header>
            <aside className = "sidebar">
                <h3>Shopping Categories</h3>
                <button className = "sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href = "index.html">Pants</a>
                    </li>

                    <li>
                        <a href = "index.html">Shirts</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
            <Routes>
            <Route path="/" element={<Home />} />
<Route path="/catalog" element={<Products />} />
</Routes>
</main>
            <footer>
                &copy; 2024 Bone Hammer
            </footer>
        </div>
    </body>
</div>
</Router>
  );
}


export default App;
