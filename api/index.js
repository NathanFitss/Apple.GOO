const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API Endpoint untuk siap dihubungkan ke Database di masa depan
app.get('/api/products', (req, res) => {
    const products = [
        // Seri Biasa
        { id: 1, name: "iPhone XR", category: "Biasa", fee: 50000 },
        { id: 2, name: "iPhone 11", category: "Biasa", fee: 100000 },
        { id: 3, name: "iPhone 12", category: "Biasa", fee: 150000 },
        { id: 4, name: "iPhone 13", category: "Biasa", fee: 200000 },
        { id: 5, name: "iPhone 14", category: "Biasa", fee: 250000 },
        { id: 6, name: "iPhone 15", category: "Biasa", fee: 300000 },
        { id: 7, name: "iPhone 16", category: "Biasa", fee: 350000 },
        { id: 8, name: "iPhone 17", category: "Biasa", fee: 400000 },
        // Seri Pro
        { id: 9, name: "iPhone 11 Pro", category: "Pro", fee: 150000 },
        { id: 10, name: "iPhone 12 Pro", category: "Pro", fee: 200000 },
        { id: 11, name: "iPhone 13 Pro", category: "Pro", fee: 250000 },
        { id: 12, name: "iPhone 14 Pro", category: "Pro", fee: 300000 },
        { id: 13, name: "iPhone 15 Pro", category: "Pro", fee: 350000 },
        { id: 14, name: "iPhone 16 Pro", category: "Pro", fee: 400000 },
        { id: 15, name: "iPhone 17 Pro", category: "Pro", fee: 450000 },
        // Seri Pro Max
        { id: 16, name: "iPhone 11 Pro Max", category: "Pro Max", fee: 200000 },
        { id: 17, name: "iPhone 12 Pro Max", category: "Pro Max", fee: 250000 },
        { id: 18, name: "iPhone 13 Pro Max", category: "Pro Max", fee: 300000 },
        { id: 19, name: "iPhone 14 Pro Max", category: "Pro Max", fee: 350000 },
        { id: 20, name: "iPhone 15 Pro Max", category: "Pro Max", fee: 400000 },
        { id: 21, name: "iPhone 16 Pro Max", category: "Pro Max", fee: 450000 },
        { id: 22, name: "iPhone 17 Pro Max", category: "Pro Max", fee: 500000 }
    ];
    res.json(products);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
  
