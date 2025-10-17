const manufacturer = [];

//populate textboxes
async function populateRepairBox(RepairID) {
    const { CustomerFName, CustomerLName, UnitName, ManufacturerName, RepairStatus, CheckinDate, CheckoutDate, repairdescription } = manufacturer[RepairID - 1];
    document.getElementById('Customer').value = CustomerFName + ' ' + CustomerLName;
    document.getElementById('Unit').value = UnitName;
    document.getElementById('Manufacturer').value = ManufacturerName;
    document.getElementById('Status').value = RepairStatus;
    document.getElementById('CheckInDate').value = CheckinDate;
    document.getElementById('CheckOutDate').value = CheckoutDate;
    document.getElementById('Description').value = repairdescription;

    //console.log(RepairID);
}

//populate listbox
async function populateRepair() {
    try {
        const response = await fetch('/api/getRepairs');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('ManufacturerRepairID');
        listbox.innerHTML = '<option value="">select a Repair </option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.RepairID;
            opt.textContent = option.RepairID + ' ' + option.repairdescription + ' problem for ' + option.CustomerFName + ' ' + option.CustomerLName;
            listbox.appendChild(opt);
            manufacturer.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch repairs', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populateRepair();

    document.getElementById('ManufacturerRepairID').addEventListener('change', function (event) {
        const RepairID = event.target.value;
        //console.log(repairID);
        //console.log(inhouse);
        populateRepairBox(RepairID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});