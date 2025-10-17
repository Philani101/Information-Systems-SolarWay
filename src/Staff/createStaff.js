//createStaff
async function createStaff(staffFName, staffLName, staffEmail, staffContactNo, staffRole) {
    try {
        const response = await fetch('/api/createStaff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                staffFName: staffFName,
                staffLName: staffLName,
                staffEmail: staffEmail,
                staffContactNo: staffContactNo,
                staffRole: staffRole,

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

    //validate phone number
    function validateContactNo(staffContactNo) {
        const staffContactNoRegex = /^(?:\+?\d{1,3})?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{4,}$/;
        return staffContactNoRegex.test(staffContactNo);
    }

    //validate email address
    function validateEmail(staffEmail) {
        const staffEmailRegex = /^\S+@\S+\.\S+$/;
        return staffEmailRegex.test(staffEmail);
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

    //validate whether input is empty
    function validateInput() {
        const staffFName = document.getElementById('staffFName').value;
        const staffLName = (document.getElementById('staffLName').value);
        const staffEmail = document.getElementById('staffEmail').value;
        const staffContactNo = document.getElementById('staffContactNo').value;
        const staffRole = document.getElementById('staffRole').value;

        if (!validateFName(staffFName) || staffFName === "") {
            console.log('Staff First Name contains incorrect field type or cannot be empty');
            alert('Staff First Name cannot be empty');
            return false
        }

        if (!validateLName(staffLName) || staffLName === "") {
            console.log('Staff Last Name contains incorrect field type or cannot be empty');
            alert('Staff Last Name cannot be empty');
            return false
        }

        if (!validateEmail(staffEmail) || staffEmail === "") {
            console.log('Staff Email Date cannot be empty');
            alert('Staff Email Date cannot be empty');
            return false
        }

        if (!validateContactNo(staffContactNo) || staffContactNo === "") {
            console.log('Staff Contact No Status cannot be empty');
            alert('Staff Contact No cannot be empty');
            return false
        }

        if (staffRole === "") {
            console.log('Staff Role cannot be empty');
            alert('Staff Role cannot be empty');
            return false
        }
        return true;
    }

    document.getElementById('createStaffSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const staffFName = document.getElementById('staffFName').value;
        const staffLName = (document.getElementById('staffLName').value);
        const staffEmail = document.getElementById('staffEmail').value;
        const staffContactNo = document.getElementById('staffContactNo').value;
        const staffRole = document.getElementById('staffRole').value;

        if (!validateInput()) return;

        createStaff(staffFName, staffLName, staffEmail, staffContactNo, staffRole);
    });
});