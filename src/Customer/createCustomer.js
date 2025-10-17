//createCustomer
async function createCustomer(customerFName, customerLName, customerEmail, customerContactNo, customerAddress) {
    try {
        const response = await fetch('/api/createCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customerFName: customerFName,
                customerLName: customerLName,
                customerEmail: customerEmail,
                customerContactNo: customerContactNo,
                customerAddress: customerAddress

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

    //validate whether input is empty
    function validateInput() {
        const customerFName = document.getElementById('FirstName').value;
        const customerLName = document.getElementById('Lastname').value;
        const customerEmail = document.getElementById('EmailAddress').value;
        const customerContactNo = document.getElementById('ContactNumber').value;
        const customerAddress = document.getElementById('PhysicalAddress').value;

        if (!validateFName(customerFName) || customerFName === "") {
            console.log('Customer First Name contains incorrect field type or cannot be empty');
            alert('Customer First Name contains incorrect field type or cannot be empty');
            return false;
        }

        if (!validateLName(customerLName) || customerLName === "") {
            console.log('Customer Last Name contains incorrect field type or cannot be empty');
            alert('Customer Last Name contains incorrect field type or cannot be empty');
            return false;
        }

        if (!validateEmail(customerEmail) || customerEmail === "") {
            console.log('Invalid Format for Customer Email or cannot be empty');
            alert('Customer Email cannot be empty');
            return false;
        }

        if (!validateContactNo(customerContactNo) || customerContactNo === "") {
            console.log('Invalid Format for Customer Contact No or cannot be empty');
            alert('Customer Contact No cannot be empty');
            return false;
        }

        if (customerAddress === "") {
            console.log('Customer Address cannot be empty');
            alert('Customer Address cannot be empty');
            return false;
        }

        return true;
    }

    //validate phone number
    function validateContactNo(customerContactNo) {
        const customerContactNoRegex = /^(?:\+?\d{1,3})?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{4,}$/;
        return customerContactNoRegex.test(customerContactNo);
    }

    //validate email address
    function validateEmail(customerEmail) {
        const customerEmailRegex = /^\S+@\S+\.\S+$/;
        return customerEmailRegex.test(customerEmail);
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

    document.getElementById('createcustomerbtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const customerFName = document.getElementById('FirstName').value;
        const customerLName = (document.getElementById('Lastname').value);
        const customerEmail = document.getElementById('EmailAddress').value;
        const customerContactNo = document.getElementById('ContactNumber').value;
        const customerAddress = document.getElementById('PhysicalAddress').value;

        if (!validateInput()) return;

        createCustomer(customerFName, customerLName, customerEmail, customerContactNo, customerAddress);
    });
});