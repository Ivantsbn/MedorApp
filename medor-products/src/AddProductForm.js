import React, { useState } from 'react';

// komponenta pro pridani noveho produktu 
const AddProductForm = ({ addProduct }) => {

    //promenne pro uchovani hodnot formulare
    const [name, setName] = useState('');
    const [payment, setPayment] = useState('');
    const [marketPresence, setMarketPresnce] = useState(false);

    // funkce pro odesilani formulare
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !payment) return;
        addProduct({ name, payment, marketPresence});
        setName('');
        setPayment('');
        setMarketPresnce(false);
    };

    return (
        <div className="add-product-form">
            <h2>Přídat nový product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Název:
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
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
    )
}
export default AddProductForm;