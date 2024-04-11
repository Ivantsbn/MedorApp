import React, { useState } from 'react';

// Komponenta pro přidání nového produktu
const AddProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [payment, setPayment] = useState('');
    const [marketPresence, setMarketPresence] = useState(false);

    // Funkce pro odeslání formuláře
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !payment) return;
        addProduct({ name, payment, marketPresence });
        // Resetování hodnot formuláře po odeslání
        setName('');
        setPayment('');
        setMarketPresence(false);
    };

    return (
        <div className="add-product-form">
        <h2>Přidat nový produkt</h2>
        <form onSubmit={handleSubmit}>
            {/* Pole pro zadání názvu produktu */}
            <label>
            Název:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
            Úhrada:
            <select value={payment} onChange={(e) => setPayment(e.target.value)}>
                <option value="hrazené">Hrazené</option>
                <option value="nehrazené">Nehrazené</option>
                <option value="neuvedeno">Neuvedeno</option>
            </select>
            </label>
            <label>
            Výskyt na trhu:
            <input
                type="checkbox"
                checked={marketPresence}
                onChange={(e) => setMarketPresence(e.target.checked)}
            />
            </label>
            <button type="submit">Přidat produkt</button>
        </form>
        </div>
    );
};

export default AddProductForm;
