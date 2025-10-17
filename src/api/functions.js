const mysql = require('mysql2/promise');

//create connection
async function createConnection() {
    try {
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'cr1sps',
            database: 'SolarWaysdb',
            password: 'Foreign03',
        });
        console.log('connected to database');
        return conn;
    }
    catch (e) {
        console.error(e);
    }
}

const yes = async (req, res) => {
    res.status(200).send('some string');
};

//createJob
const createJob = async (req, res) => {
    const { hoursPlanned, hoursWorked, staffID, repairID, jobDescription} = req.body;
    const query = 'INSERT INTO job (JobHoursPlanned, JobHoursWorked, StaffID, RepairID, JobDescription) VALUES (?, ?, ?, ?, ?)';
    const values = [hoursPlanned, hoursWorked, staffID, repairID, jobDescription];

    try {
        const conn = await createConnection();
        //console.log(values);
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Job created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//updateJob
const updateJob = async (req, res) => {
    const { updatejobID, updatehoursWorked} = req.body;
    const query = 'UPDATE job SET JobHoursWorked = ? WHERE JobID = ?';
    const values = [updatehoursWorked, updatejobID];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Job updated successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);    
    }
};

//createInhouse
const createInhouse = async (req, res) => {
    const { customerID, unitID, manufacturerID, repairStatus, checkinDate, checkoutDate, repairDescription} = req.body;
    const query = 'INSERT INTO repair (CustomerID, UnitID, ManufacturerID, RepairStatus, CheckinDate, CheckoutDate, repairdescription) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [customerID, unitID, manufacturerID, repairStatus, checkinDate, checkoutDate, repairDescription];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Repair created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//createManufacturer
const createManufacturer = async (req, res) => {
    const { mcustomerID, munitID, mmanufacturerID, mrepairStatus, mcheckinDate, mcheckoutDate, mrepairDescription} = req.body;
    const query = 'INSERT INTO repair (CustomerID, UnitID, ManufacturerID, RepairStatus, CheckinDate, CheckoutDate, repairdescription) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [mcustomerID, munitID, mmanufacturerID, mrepairStatus, mcheckinDate, mcheckoutDate, mrepairDescription];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Repair created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//updateRepair
const updateRepair = async (req, res) => {
    const { updateRepairID, updateRepairStatus} = req.body;
    const query = 'UPDATE repair SET RepairStatus = ? WHERE RepairID = ?';
    const values = [updateRepairStatus, updateRepairID];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Repair updated successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);    
    }
};

//createUnit
const createUnit = async (req, res) => {
    const { unitName, unitBrand, unitType, unitSize } = req.body;
    const query = 'INSERT INTO unit (UnitName, UnitBrand, UnitType, UnitSize) VALUES (?, ?, ?, ?)';
    const values = [unitName, unitBrand, unitType, unitSize];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Unit created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//updateUnit
const updateUnit = async (req, res) => {
    const { updateunitName, updateunitBrand, updateunitType, updateunitSize, updateunitID } = req.body;
    const query = 'UPDATE unit SET UnitName = ?, UnitBrand = ?, UnitType = ?, UnitSize = ? WHERE UnitID = ?';
    const values = [updateunitName, updateunitBrand, updateunitType, updateunitSize, updateunitID];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Unit updated successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);    
    }
};

//getUnit
const getUnit = async (req, res) => {
    const query = 'SELECT * FROM unit';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getCustomer
const getCustomer = async (req, res) => {
    const query = 'SELECT * FROM customer';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getRepairs
const getRepairs = async (req, res) => {
    const query = 'SELECT * FROM repair, customer WHERE repair.CustomerID = customer.CustomerID';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getUnits
const getUnits = async (req, res) => {
    const query = 'SELECT * FROM unit';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getManufacturer
const getManufacturer = async (req, res) => {
    const query = 'SELECT * FROM manufacturer';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getStaff
const getStaff = async (req, res) => {
    const query = 'SELECT * FROM staff';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getRepairID
const getRepairID = async (req, res) => {
    const query = 'SELECT * FROM repair';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getJobID
const getJobID = async (req, res) => {
    const query = 'SELECT * FROM job, repair, staff, customer WHERE job.RepairID = repair.RepairID AND job.StaffID = staff.StaffID AND customer.CustomerID = repair.CustomerID';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//createPart
const createPart = async (req, res) => {
    const { partName, partQuantity} = req.body;
    const query = 'INSERT INTO part (PartName, PartQuantity) VALUES (?, ?)';
    const values = [partName, partQuantity];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Part created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//updatePart
const updatePart = async (req, res) => {
    const { upartQuantity, upartID} = req.body;
    const query = 'UPDATE part SET PartQuantity = ? WHERE PartID = ?';
    const values = [upartQuantity, upartID];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Part updated successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getPartID
const getPartID = async (req, res) => {
    const query = 'SELECT * FROM part';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getforRepairPart
const getforRepairPart = async (req, res) => {
    const query = 'SELECT * FROM repair, repairpart, part, customer WHERE (repair.RepairID = repairpart.RepairID) AND (part.PartID = repairpart.PartID) AND (repair.CustomerID = customer.CustomerID)';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//getRepairPart
const getRepairPart = async (req, res) => {
    const query = 'SELECT * FROM repairpart';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};


//createRepairPart
const createRepairPart = async (req, res) => {
    const { repairID, partID} = req.body;
    const query = 'INSERT INTO repairpart(RepairID, PartID) VALUES (?, ?)';
    const values = [repairID, partID];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('RepairPart created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

// //updateRepairPart
// const updateRepairPart = async (req, res) => {
//     const { upartQuantity, upartID} = req.body;
//     const query = 'UPDATE repairpart SET PartQuantity = ? WHERE PartID = ?';
//     const values = [upartQuantity, upartID];

//     try {
//         const conn = await createConnection();
//         const [result, fields] = await conn.execute(query, values);
//         await conn.end();
//         res.status(200).send('Part updated successfully');
//     }
//     catch (e) {
//         console.error(e);
//         res.sendStatus(500);
//     }
// };

//createCustomer
const createCustomer = async (req, res) => {
    const { customerFName, customerLName, customerEmail, customerContactNo, customerAddress } = req.body;
    const query = 'INSERT INTO customer (CustomerFName, CustomerLName, CustomerEmail, CustomerContactNo, CustomerAddress) VALUES (?, ?, ?, ?, ?)';
    const values = [customerFName, customerLName, customerEmail, customerContactNo, customerAddress];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Customer created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//createNewManufacturer
const createNewManufacturer = async (req, res) => {
    const { manufacturerName, manufacturerEmail, manufacturerContactNo, manufacturerAddress } = req.body;
    const query = 'INSERT INTO manufacturer (ManufacturerName, ManufacturerEmail, ManufacturerContactNo, ManufacturerAddress) VALUES (?, ?, ?, ?)';
    const values = [manufacturerName, manufacturerEmail, manufacturerContactNo, manufacturerAddress];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Manufacturer created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//createStaff
const createStaff = async (req, res) => {
    const { staffFName, staffLName, staffEmail, staffContactNo, staffRole } = req.body;
    const query = 'INSERT INTO staff (StaffFName, StaffLName, StaffEmail, StaffContactNo, StaffRole) VALUES (?, ?, ?, ?, ?)';
    const values = [staffFName, staffLName, staffEmail, staffContactNo, staffRole];

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Staff member created successfully');
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//updateCustomer
const updateCustomer = async (req, res) => {
    const { colName, updatedDetails, customerID } = req.body;
    const query = `UPDATE customer SET ${colName} = ? WHERE CustomerID = ?`;
    const values = [updatedDetails, customerID];

    try{
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send('Customer details updated successfully');
    }catch (e){
        console.error(e);
        res.sendStatus(500);
    }
};

//updateNewManufacturer
const updateNewManufacturer = async (req, res) => {
    const { colName, updatedDetails, manufacturerID } = req.body;
    const query = `UPDATE manufacturer SET ${colName} = ? WHERE ManufacturerID = ?`;
    const values = [updatedDetails, manufacturerID];

    try{
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send(' manufacturer details updated successfully');
    }catch (e){
        console.error(e);
        res.sendStatus(500);
    }
};

//updateStaff
const updateStaff = async (req, res) => {
    const { colName, updatedDetails, staffID } = req.body;
    const query = `UPDATE staff SET ${colName} = ? WHERE StaffID = ?`;
    const values = [updatedDetails, staffID];

    try{
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();
        res.status(200).send(' staff member details updated successfully');
    }catch (e){
        console.error(e);
        res.sendStatus(500);
    }
};

//login
const userLogin = async (req, res) => {
    const {StaffID, Password} = req.body;
    const query = 'SELECT * FROM staff WHERE StaffID = ? AND password = ?';
    const values = [StaffID, Password];
    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query, values);
        await conn.end();

        if (result.length === 0){
            res.status(401).send('invalid credentials');
        } else {
            res.status(200).send(result[0]['StaffRole']);
        }

    } catch (e) {
        res.status(500).send('no no');
    }
}

//viewJob
const viewJob = async (req, res) => {
    const query = 'SELECT * FROM job, staff, repair, customer WHERE (job.StaffID = staff.StaffID) AND (job.RepairID = repair.RepairID) AND (repair.CustomerID = customer.CustomerID)';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//viewRepair
const viewRepair = async (req, res) => {
    const query = 'SELECT * FROM repair, customer, unit, manufacturer WHERE (repair.CustomerID = customer.CustomerID) AND (repair.UnitID = unit.UnitID) AND (repair.ManufacturerID = manufacturer.ManufacturerID)';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

//viewRepairPart
const viewRepairPart = async (req, res) => {
    const query = 'SELECT * FROM repairpart, repair, part WHERE (repairpart.RepairID = repair.RepairID) AND (repairPart.PartID = part.PartID)';

    try {
        const conn = await createConnection();
        const [result, fields] = await conn.execute(query);
        await conn.end();
        res.status(200).json(result);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};


// always at bottom
module.exports = {
    yes,
    createJob,
    updateJob,
    createInhouse,
    createManufacturer,
    updateRepair,
    getCustomer,
    getRepairs,
    getUnits,
    getManufacturer,
    getStaff,
    getRepairID,
    getJobID,
    createUnit,
    updateUnit,
    getUnit,
    createPart,
    updatePart,
    getPartID,
    getforRepairPart,
    getRepairPart,
    createRepairPart,
    //updateRepairPart,
    createCustomer,
    createNewManufacturer,
    createStaff,
    updateCustomer,
    updateNewManufacturer,
    updateStaff,
    //login,
    userLogin,
    viewJob,
    viewRepair,
    viewRepairPart,

};