import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components';

export const App = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = [
        'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        'linear-gradient(45deg, #33eb91 30%, #30c9e8 90%)',
        'linear-gradient(45deg, #e8e331 30%, #e8308c 90%)'
    ];

    const changeColor = () => {
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <>
            <Header />
            <main style={{background: colors[colorIndex]}}>
                <button id="colorButton" onClick={changeColor}>Change Color</button>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}