import React, { useState } from "react";

const Tick=()=> {
    const [currentTime, setCurrentTime] = useState('--:--:-- --')
    setInterval(() => {
        const time = new Date();
        const timeVal = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true }).toString();
        setCurrentTime(timeVal);
    }, 500);
    return (
        <div>{currentTime}</div>
    );
}

export default Tick;