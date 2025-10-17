//createManufacturer
async function createManufacturer(mcustomerID, munitID, mmanufacturerID, mrepairStatus, mcheckinDate, mcheckoutDate, mrepairDescription){
    try{
        const response = await fetch('/api/createManufacturer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({ 
                mcustomerID: mcustomerID, 
                munitID: munitID, 
                mmanufacturerID: mmanufacturerID, 
                mrepairStatus: mrepairStatus, 
                mcheckinDate: mcheckinDate, 
                mcheckoutDate: mcheckoutDate,
                mrepairDescription: mrepairDescription,
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
    async function populateCustomers(){
        try{
            const response = await fetch('/api/getCustomer');
            if (!response.ok){
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('mInputCustomer');
            listbox.innerHTML = '<option value="">select a customer</option>';

            options.forEach(option =>{
                const opt = document.createElement('option');
                opt.value = option.CustomerID;
                opt.textContent = option.CustomerFName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch options', error);
        }
    }
    populateCustomers();

    async function populateUnit(){
        try{
            const response = await fetch('/api/getUnits');
            if (!response.ok){
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('mSelectUnits');
            listbox.innerHTML = '<option value="">select a unit</option>';

            options.forEach(option =>{
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

    async function populateManufacturer(){
        try{
            const response = await fetch('/api/getManufacturer');
            if (!response.ok){
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('mManufactures');
            listbox.innerHTML = '<option value="">select a manufacturer</option>';

            options.forEach(option =>{
                const opt = document.createElement('option');
                opt.value = option.ManufacturerID;
                opt.textContent = option.ManufacturerName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch manufacturer', error);
        }
    }
    populateManufacturer();

    //validate whether input is empty
    function validateInput() {
            const mcustomerID = document.getElementById('mInputCustomer').value;
            const munitID = (document.getElementById('mSelectUnits').value);
            const mmanufacturerID = (document.getElementById('mManufactures').value);
            const mcheckinDate = document.getElementById('mInputDate').value;

            const mcurrent = new Date();
            const mcurrentNew = new Date(mcurrent);
            mcurrentNew.setDate(mcurrentNew.getDate() + 10);
            const mrepairDescription = document.getElementById('mRepairdescription').value;

            if (!mcustomerID){
                console.log('Customer cannot be empty');
                alert('Customer cannot be empty');
                return false;
            }

            if (!munitID){
                console.log('Unit cannot be empty');
                alert('Unit cannot be empty');
                return false;
            }

            if (!mmanufacturerID){
                console.log('Manufacturer cannot be empty');
                alert('Manufacturer cannot be empty');
                return false;
            }

            if (mcheckinDate === ""){
                console.log('Checkin Date cannot be empty');
                alert('Checkin Date cannot be empty');
                return false;
            }

            if (mrepairDescription === ""){
                console.log('Repair Description cannot be empty');
                alert('Repair Description cannot be empty');
                return false;
            }

            return true;
    }

    document.getElementById('Manufacturerbtn').addEventListener('click', function (event) {
        event.preventDefault();
    
        const mcustomerID = document.getElementById('mInputCustomer').value;
        const munitID = (document.getElementById('mSelectUnits').value);
        const mmanufacturerID = (document.getElementById('mManufactures').value);
        const mcheckinDate = document.getElementById('mInputDate').value;
        const mrepairStatus = 'IN REPAIR';

        const mcurrent = new Date();
        const mcurrentNew = new Date(mcurrent);
        mcurrentNew.setDate(mcurrentNew.getDate() + 10);
        const mcheckoutDate = mcurrentNew.toISOString().slice(0,10);
        const mrepairDescription = document.getElementById('mRepairdescription').value;

        if (!validateInput()) return;
        
        createManufacturer(mcustomerID, munitID, mmanufacturerID, mrepairStatus, mcheckinDate, mcheckoutDate, mrepairDescription);
    });
});