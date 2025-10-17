//createInhouse
async function createInhouse(customerID, unitID, manufacturerID, repairStatus, checkinDate, checkoutDate, repairDescription) {
    try {
        const response = await fetch('/api/createInhouse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customerID: customerID,
                unitID: unitID,
                manufacturerID: manufacturerID,
                repairStatus: repairStatus,
                checkinDate: checkinDate,
                checkoutDate: checkoutDate,
                repairDescription: repairDescription,

            })
        });

        const data = await response.text();
        alert(data);
    }
    catch (e) {
        console.error(e);
        alert(e);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    //populate listbox
    async function populateCustomers() {
        try {
            const response = await fetch('/api/getCustomer');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('InputCustomer');
            listbox.innerHTML = '<option value="">select a customer</option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.CustomerID;
                opt.textContent = option.CustomerFName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch customer', error);
        }
    }
    populateCustomers();

    async function populateUnit() {
        try {
            const response = await fetch('/api/getUnits');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('SelectUnits');
            listbox.innerHTML = '<option value="">select a unit</option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.UnitID;
                opt.textContent = option.UnitName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch unit', error);
        }
    }
    populateUnit();

    //validate whether input is empty
    function validateInput() {

        const customerID = document.getElementById('InputCustomer').value;
        const unitID = (document.getElementById('SelectUnits').value);
        const checkinDate = document.getElementById('InputDate').value;

        const current = new Date();
        const currentNew = new Date(current);
        currentNew.setDate(currentNew.getDate() + 10);
        const repairDescription = document.getElementById('Repairdescription').value;

        if (!customerID) {
            console.log('Customer cannot be empty');
            alert('Customer cannot be empty');
            return false;
        }

        if (!unitID) {
            console.log('Unit cannot be empty');
            alert('Unit cannot be empty');
            return false;
        }

        if (checkinDate === "") {
            console.log('Checkin Date cannot be empty');
            alert('Checkin Date cannot be empty');
            return false;
        }

        if (repairDescription === "") {
            console.log('Repair Description cannot be empty');
            alert('Repair Description cannot be empty');
            return false;
        }

        return true;
    }

    document.getElementById('InhousebtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const customerID = document.getElementById('InputCustomer').value;
        const unitID = (document.getElementById('SelectUnits').value);
        const manufacturerID = 4;
        const checkinDate = document.getElementById('InputDate').value;
        const repairStatus = 'IN REPAIR';

        const current = new Date();
        const currentNew = new Date(current);
        currentNew.setDate(currentNew.getDate() + 10);
        const checkoutDate = currentNew.toISOString().slice(0, 10);
        const repairDescription = document.getElementById('Repairdescription').value;

        if (!validateInput()) return;

        createInhouse(customerID, unitID, manufacturerID, repairStatus, checkinDate, checkoutDate, repairDescription);
    });
});