const manufacturer = [];

//populate textboxes
async function populateRepairBox(ManufacturerID) {
    const { ManufacturerName, ManufacturerEmail, ManufacturerContactNo, ManufacturerAddress } = manufacturer[ManufacturerID - 1];
    document.getElementById('ManufacturerName').value = ManufacturerName;
    document.getElementById('ManufacturerEmail').value = ManufacturerEmail;
    document.getElementById('ManufacturerContactNo').value = ManufacturerContactNo;
    document.getElementById('ManufacturerAddress').value = ManufacturerAddress;
}

//populate listbox
async function populateRepair() {
    try {
        const response = await fetch('/api/getManufacturer');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('ManufacturerID');
        listbox.innerHTML = '<option value="">select a Manufacturer </option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.ManufacturerID;
            opt.text = option.ManufacturerID + ' ' + option.ManufacturerName;
            listbox.appendChild(opt);
            manufacturer.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch manufacturers', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populateRepair();

    document.getElementById('ManufacturerID').addEventListener('change', function (event) {
        const ManufacturerID = event.target.value;
        //console.log(repairID);
        //console.log(inhouse);
        populateRepairBox(ManufacturerID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});