// e-raport-api/routes/raportRoutes.js

const express = require('express');
const router = express.Router();
const raportController = require('../controllers/raportController');

// Pastikan semua fungsi controller ada dan terdefinisi
console.log("RAPORT CONTROLLER METHODS:", Object.keys(raportController));

// Route untuk mengambil data raport lengkap
// GET /api/raport/:siswaId/:tahunAjaran/:semester
router.get('/:siswaId/:tahunAjaran/:semester', raportController.getRaportData);

// Routes untuk mengupdate data
// PUT /api/raport/nilai-ujian/:id
router.put('/nilai-ujian/:id', raportController.updateNilaiUjian);

// PUT /api/raport/nilai-hafalan/:id
router.put('/nilai-hafalan/:id', raportController.updateNilaiHafalan);

// PUT /api/raport/kehadiran/:id
router.put('/kehadiran/:id', raportController.updateKehadiran);

// POST /api/raport/save-validated
router.post('/save-validated', (req, res, next) => {
  console.log("🚀 ROUTE /save-validated HIT");
  console.log("📦 Body diterima:", JSON.stringify(req.body, null, 2));
  next();
}, raportController.saveValidatedRaport);


module.exports = router;