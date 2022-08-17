import React from 'react';
import { Button } from '../components/button/Button';
import "./Home.css";

export const Home = () => {
    const handleClick = () => {
        alert("Trigger Action!")
    }

    return (
        <>
            <main>
                <h2>Button Component</h2>
                <Button onClick={handleClick} btnName={"Action Button"} />
            </main>
        </>
    )
}