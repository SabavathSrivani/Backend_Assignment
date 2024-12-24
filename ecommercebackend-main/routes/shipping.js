const express = require('express');
const router = express.Router();
const axios = require('axios');

// Configure Shiprocket API
const shiprocketAPI = axios.create({
  baseURL: 'https://apiv2.shiprocket.in/v1/external',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY', // Replace YOUR_API_KEY with the actual API key
  },
});

// Endpoint to fetch shipping rates
router.post('/get-shipping-rate', async (req, res) => {
  try {
    const response = await shiprocketAPI.post('/courier', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching shipping rate:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
