//updateStaff
async function updateStaff(colName, updatedDetails, staffID) {
    try {
        const response = await fetch('/api/updateStaff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                colName: colName,
                updatedDetails: updatedDetails,
                staffID: staffID,

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
    async function populateStaff() {
        try {
            const response = await fetch('/api/getStaff');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('uStaffID');
            listbox.innerHTML = '<option value="">select a staff member </option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.StaffID;
                opt.textContent = option.StaffFName + ' ' + option.StaffLName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch Staff member', error);
        }
    }
    populateStaff();

    //validate whether input is empty
    function validateInput() {

        const updatedDetails = document.getElementById('NewDetails').value;
        const staffID = document.getElementById('uStaffID').value;
        const colName = document.getElementById('updateSelectStatus').value;

        if (!staffID) {
            console.log('Staff cannot be empty');
            alert('Staff cannot be empty');
            return false;
        } 

        if (colName === "StaffFName" || colName === "StaffLName"){
            if (!validateFName(updatedDetails) || !validateLName (updatedDetails) || updatedDetails === "") {
                console.log('staff first name or last name contains incorrect field type or cannot be empty');
                alert('staff first name or last name contains incorrect field type or cannot be empty');
                return false;
            }
        }

        if (colName === "StaffEmail"){
            if (updatedDetails === ""){
                console.log('staff email cannot be empty');
                alert('staff email cannot be empty');
                return false;  
            }

            if (!validateEmail(updatedDetails)) {
                console.log('Invalid Format for staff');
                alert('Invalid Format for staff');
                return false;
            }
        }

        if (colName === "StaffContactNo"){
            if (updatedDetails === "") {
                console.log('Customer contact number cannot be empty');
                alert('Customer contact number cannot be empty');
                return false;
            }

            if (!validateContactNo(updatedDetails)) {
                console.log('Invalid Format for staff Contact No');
                alert('Invalid Format for staff Contact No ');
                return false;
            }

        }

        if (colName === "CustomerAddress"){
            if (updatedDetails === "") {
                console.log('Customer address cannot be empty');
                alert('Customer address cannot be empty');
                return false;
            }
        }

        if (colName === "StaffRole"){
            if (updatedDetails === ""){
                console.log('staff role cannot be empty');
                alert('staff role cannot be empty');
                return false;
            }
        }

        return true;
    }

    //validate phone number
    function validateContactNo(updatedDetails) {
        const customerContactNoRegex = /^(?:\+?\d{1,3})?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{4,}$/;
        return customerContactNoRegex.test(updatedDetails);
    }

    //validate email address
    function validateEmail(updatedDetails) {
        const customerEmailRegex = /^\S+@\S+\.\S+$/;
        return customerEmailRegex.test(updatedDetails);
    }

    //validate first name
    function validateFName(customerFName) {
        const customerFNameRegex = /^[A-Za-z]+$/;
        return customerFNameRegex.test(customerFName);
    }

    //validate last name
    function validateLName(customerLName) {
        const customerLNameRegex = /^[A-Za-z]+$/;
        return customerLNameRegex.test(customerLName);
    }


    //takes in values to submit to api upon button click
    document.getElementById('StaffbtnUpdate').addEventListener('click', function (event) {
        event.preventDefault();

        const colName = document.getElementById('updateSelectStatus').value;
        const updatedDetails = document.getElementById('NewDetails').value;
        const staffID = document.getElementById('uStaffID').value;

        if (!validateInput()) return;

        updateStaff(colName, updatedDetails, staffID);
    });
});