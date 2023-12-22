const axios = require('axios');

exports.getPrediction = async (req, res) => {
  try {
    const { perawatan, ukuran, aktifitas, agresif, kesulitan, harga } = req.body;
    const data = { perawatan, ukuran, aktifitas, agresif, kesulitan, harga };
    const url = 'https://ml-deploy-yqe4ddnmxq-et.a.run.app/predict';

    const response = await axios.post(url, data);
    const prediction = response.data;

    res.json(prediction);
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat memperoleh prediksi.' });
  }
};