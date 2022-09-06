import React from 'react';
import { Button } from '../components/button/Button';
import { Header } from '../components/header/Header';
import "./Home.css";

export const Home = () => {
    const handleClick = () => {
        alert("Trigger Action!")
    }

    return (
        <>
            <Header />
            <main>
                <h2>Button Component</h2>
                <Button onClick={handleClick} btnName={"Action Button"} />
            </main>
        </>
    )
}