const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
    res.json({ 
        message: 'HomeSolution API v1.0',
        status: 'running',
        endpoints: ['/api/technicians', '/api/requests', '/api/users']
    });
});

// Ruta de salud
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 HomeSolution API running on port ${PORT}`);
});
