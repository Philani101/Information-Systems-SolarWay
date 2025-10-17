//updateNewManufacturer
async function updateNewManufacturer(colName, updatedDetails, manufacturerID) {
    try {
        const response = await fetch('/api/updateNewManufacturer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                colName: colName,
                updatedDetails: updatedDetails,
                manufacturerID: manufacturerID,

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
    //populates listboxes
    async function populateManufacturer() {
        try {
            const response = await fetch('/api/getManufacturer');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('umanufacturerID');
            listbox.innerHTML = '<option value="">select a manufacturer </option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.ManufacturerID;
                opt.textContent = option.ManufacturerName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch Manufacturer', error);
        }
    }
    populateManufacturer();

    //validate phone number
    function validateContactNo(updatedDetails) {
        const manufacturerContactNoRegex = /^(?:\+?\d{1,3})?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{4,}$/;
        return manufacturerContactNoRegex.test(updatedDetails);
    }

    //validate email address
    function validateEmail(updatedDetails) {
        const manufacturerEmailRegex = /^\S+@\S+\.\S+$/;
        return manufacturerEmailRegex.test(updatedDetails);
    }

    function validateInput() {

        const updatedDetails = document.getElementById('NewDetails').value;
        const umanufacturerID = document.getElementById('umanufacturerID').value;
        const colName = document.getElementById('updateSelectStatus').value;

        if (!umanufacturerID || umanufacturerID < 0) {
            console.log('manufacturer cannot be empty');
            alert('manufacturer cannot be empty');
            return false;
        }

        if (colName === "ManufacturerName") {
            if (updatedDetails === "") {
                console.log('manufacturer name cannot be empty');
                alert('manufacturer name cannot be empty');
                return false;
            }
        }

        if (colName === "ManufacturerEmail") {
            if (updatedDetails === "") {
                console.log('manufacturer email cannot be empty');
                alert('manufacturer email cannot be empty');
                return false;
            }

            if (!validateEmail(updatedDetails)) {
                console.log('Invalid Format for manufacturer Email or cannot be empty');
                alert('Invalid Format for manufacturer Email or cannot be empty');
                return false;
            }
        }

        if (colName === "ManufacturerContactNo") {
            if (updatedDetails === "") {
                console.log('manufacturer contact number cannot be empty');
                alert('manufacturer contact number cannot be empty');
                return false;
            }

            if (!validateContactNo(updatedDetails)) {
                console.log('Invalid Format for manufacturer Contact No or cannot be empty');
                alert('Invalid Format for manufacturer Contact No or cannot be empty');
                return false;
            }

        }

        if (colName === "ManufacturerAddress") {
            if (updatedDetails === "") {
                console.log('manufacturer address cannot be empty');
                alert('manufacturer address cannot be empty');
                return false;
            }
        }
        return true;
    }

    //takes in values to submit to api upon button click
    document.getElementById('newmanufactureUpdateBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const colName = document.getElementById('updateSelectStatus').value;
        const updatedDetails = document.getElementById('NewDetails').value;
        const manufacturerID = document.getElementById('umanufacturerID').value;

        if (!validateInput()) return;

        updateNewManufacturer(colName, updatedDetails, manufacturerID);
    });
});