const units = [];

async function updateUnit(updateunitID, updateunitName, updateunitBrand, updateunitType, updateunitSize) {
    try {
        const response = await fetch('/api/updateUnit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                updateunitID: updateunitID,
                updateunitName: updateunitName,
                updateunitBrand: updateunitBrand,
                updateunitType, updateunitType,
                updateunitSize: updateunitSize,
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

//populate textboxes
async function populateUnitbox(unitID) {
    const { UnitName, UnitBrand, UnitType, UnitSize } = units[unitID - 1];
    document.getElementById('updateunitName_input').value = UnitName;
    document.getElementById('updateunitBrand_input').value = UnitBrand;
    document.getElementById('updateunitType_input').value = UnitType;
    document.getElementById('updateunitSize_input').value = UnitSize;
}

//populate listbox
async function populateUnit() {
    try {
        const response = await fetch('/api/getUnit');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        console.log(options);
        const listbox = document.getElementById('update_unitID');
        listbox.innerHTML = '<option value="">select a Unit </option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.UnitID;
            opt.text = option.UnitID + ' ' + option.UnitName;
            listbox.appendChild(opt);
            units.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch units', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateUnit();
    document.getElementById('update_unitID').addEventListener('change', function (event) {
        const unitID = event.target.value;
        console.log(unitID);
        populateUnitbox(unitID);
    })

    //validate whether input is empty
    function validateInput() {

        const updateunitID = document.getElementById('update_unitID').value;
        const updateunitName = document.getElementById('updateunitName_input').value;
        const updateunitBrand = (document.getElementById('updateunitBrand_input').value);
        const updateunitType = document.getElementById('updateunitType_input').value;
        const updateunitSize = document.getElementById('updateunitSize_input').value;

        if (!updateunitID) {
            console.log('UnitID cannot be empty');
            alert('UnitID cannot be empty');
            return false
        }

        if (updateunitName === "") {
            console.log('Unit Name cannot be empty');
            alert('Unit Name cannot be empty');
            return false
        }

        if (updateunitBrand === "") {
            console.log('Unit Brand cannot be empty');
            alert('Unit Brand cannot be empty');
            return false
        }

        if (updateunitType === "") {
            console.log('Unit Type cannot be empty');
            alert('Unit Type cannot be empty');
            return false
        }

        if (updateunitSize === "") {
            console.log('Unit Size cannot be empty');
            alert('Unit Size cannot be empty');
            return false
        }

        return true;
    }

    document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const updateunitID = document.getElementById('update_unitID').value;
        const updateunitName = document.getElementById('updateunitName_input').value;
        const updateunitBrand = document.getElementById('updateunitBrand_input').value;
        const updateunitType = document.getElementById('updateunitType_input').value;
        const updateunitSize = document.getElementById('updateunitSize_input').value;

        if (!validateInput()) return;
        
        updateUnit(updateunitID, updateunitName, updateunitBrand, updateunitType, updateunitSize);
    });
});