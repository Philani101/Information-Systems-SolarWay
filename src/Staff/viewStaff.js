const staff = [];

//populate textboxes
async function populateStaffBox(StaffID) {
    const { StaffFName, StaffLName, StaffEmail, StaffContactNo, StaffRole } = staff[StaffID - 1];
    document.getElementById('StaffFName').value = StaffFName;
    document.getElementById('StaffLName').value = StaffLName;
    document.getElementById('StaffEmail').value = StaffEmail;
    document.getElementById('StaffContactNo').value = StaffContactNo;
    document.getElementById('StaffRole').value = StaffRole;

}

//populate listbox
async function populateStaff() {
    try {
        const response = await fetch('/api/getStaff');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('StaffID');
        listbox.innerHTML = '<option value="">select a Staff </option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.StaffID;
            opt.text = option.StaffID + ' ' + option.StaffFName + ' ' + option.StaffLName;
            listbox.appendChild(opt);
            staff.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch staff', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populateStaff();

    document.getElementById('StaffID').addEventListener('change', function (event) {
        const StaffID = event.target.value;
        //console.log(repairID);
        //console.log(inhouse);
        populateStaffBox(StaffID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});