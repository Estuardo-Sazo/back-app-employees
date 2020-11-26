const { Router } = require('express');

/// para trabajar con nuestra rutas
const router = Router();

const employessCtrl = require('../controllers/employees.controller');

// CRUD


// /api/employees ruta
router.get('/', employessCtrl.getEmployees);

router.post('/', employessCtrl.createEmployee);

router.get('/:id', employessCtrl.getEmployee);

router.put('/:id', employessCtrl.updateEmployees);

router.delete('/:id', employessCtrl.deleteEmployees);







module.exports = router;