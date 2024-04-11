import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [payment, setPayment] = useState('');
    const [marketPresence, setMarketPresnce] = useState(false);

    const handlSubmit = (e) => {
        e.preventDefault();
        if (!name || !payment) return;
        addProduct({ name, payment, marketPresence});
        setName('');
        setPayment('');
        setMarketPresnce(false);
    };

    return ()
}