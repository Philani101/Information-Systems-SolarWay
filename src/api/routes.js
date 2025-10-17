const express = require('express');
const router = express.Router();
const functions = require('./functions');

router.post('/yes', functions.yes);

//create inhouse and manufacturer
router.post('/createInhouse', functions.createInhouse);
router.post('/createManufacturer', functions.createManufacturer);
router.get('/getCustomer', functions.getCustomer);
router.get('/getManufacturer', functions.getManufacturer);

//update inhouse and manufacturer
router.post('/updateRepair', functions.updateRepair);

//create job
router.post('/createJob', functions.createJob);
router.get('/getUnits', functions.getUnits);
router.get('/getRepairID', functions.getRepairID);
router.get('/getJobID', functions.getJobID);
router.get('/getStaff', functions.getStaff);

//update job
router.post('/updateJob', functions.updateJob);
router.get('/getRepairs', functions.getRepairs);

//create unit
router.post('/createUnit', functions.createUnit);

//update unit
router.post('/updateUnit', functions.updateUnit);
router.get('/getUnit', functions.getUnit);

//createPart
router.post('/createPart', functions.createPart);

//updatePart
router.post('/updatePart', functions.updatePart);
router.get('/getPartID', functions.getPartID);

//createRepairPart
router.post('/createRepairPart', functions.createRepairPart);

// //updateRepairPart
//router.post('updateRepairPart', functions.updateRepairPart);

//createCustomer
router.post('/createCustomer', functions.createCustomer);

//updateCustomer
router.post('/updateCustomer', functions.updateCustomer);

//createNewManufacturer
router.post('/createNewManufacturer', functions.createNewManufacturer);

//updateManufacturer
router.post('/updateNewManufacturer', functions.updateNewManufacturer);

//createStaff
router.post('/createStaff', functions.createStaff);

//updateStaff
router.post('/updateStaff', functions.updateStaff);

//login
//router.post('/login', functions.login);
router.post('/userLogin', functions.userLogin);

//viewRepairPart
router.get('/getRepairPart', functions.getRepairPart);

//viewJob
router.get('/viewJob', functions.viewJob);

//viewRepair
router.get('/viewRepair', functions.viewRepair);

//viewRepairPart
router.get('/viewRepairPart', functions.viewRepairPart);

// always at bottom
module.exports = {
    router,
};