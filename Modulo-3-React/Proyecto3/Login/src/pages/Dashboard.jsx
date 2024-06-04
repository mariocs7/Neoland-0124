import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export const Dashboard = () => {
    const [cryptos, setCryptos] = useState([]);
    const [selectedCrypto, setSelectedCrypto] = useState(null);

    useEffect(() => {
        const getCryptos = async () => {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=45&page=1&sparkline=false');
            console.log(response.data); // Imprime los datos recibidos de la API
            setCryptos(response.data);
        };
        getCryptos();
        const interval = setInterval(getCryptos, 5000); // Actualiza cada 5 segundos
        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <div className="dashboard">
            {cryptos.map(crypto => (
                <div key={crypto.id} onClick={() => setSelectedCrypto(crypto)}>
                    <img src={crypto.image} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
                    <h2>{crypto.name}</h2>
                    <p>Current Price: ${crypto.current_price}</p>
                    <p className={crypto.price_change_percentage_24h > 0 ? 'green' : 'red'}>
                        Change: {crypto.price_change_percentage_24h.toFixed(2)}%
                    </p>
                </div>
            ))}
            {selectedCrypto && (
                <div className="crypto-details">
                    <h2>{selectedCrypto.name}</h2>
                    <p>Market Cap: ${selectedCrypto.market_cap}</p>
                    <p>Volume: ${selectedCrypto.total_volume}</p>
                    <button onClick={() => setSelectedCrypto(null)}>Close</button>
                </div>
            )}
        </div>
    );
};