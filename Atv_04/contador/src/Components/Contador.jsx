import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
    setCount(0);
  };
  const startCounter = () => {
    setIsRunning(true);
  }
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={stopCounter}>Parar</button>
      <button onClick={startCounter}> Iniciar</button>
    </div>
  );
};

export default Contador;
