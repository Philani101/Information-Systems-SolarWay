//updateCustomer
async function updateCustomer(colName, updatedDetails, customerID) {
    try {
        const response = await fetch('/api/updateCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                colName: colName,
                updatedDetails: updatedDetails,
                customerID: customerID,
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
    async function populateCustomer() {
        try {
            const response = await fetch('/api/getCustomer');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('uCustomerID');
            listbox.innerHTML = '<option value="">select a customer</option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.CustomerID;
                opt.textContent = option.CustomerFName + ' ' + option.CustomerLName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch customer', error);
        }
    }
    populateCustomer();

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

    //validate whether input is empty
    function validateInput() {

        const updatedDetails = document.getElementById('NewDetails').value;
        const customerID = document.getElementById('uCustomerID').value;
        const colName = document.getElementById('updateSelectStatus').value;

        if (!customerID) {
            console.log('Customer cannot be empty');
            alert('Customer cannot be empty');
            return false;
        } 

        if (colName === "CustomerFName" || colName === "CustomerLName"){
            if (!validateFName(updatedDetails) || !validateLName(updatedDetails) || updatedDetails === "") {
                console.log('Customer first name or last name contains incorrect field type or cannot be empty');
                alert('Customer first name or last name contains incorrect field type or cannot be empty');
                return false;
            }

        }

        if (colName === "CustomerEmail"){
            if (updatedDetails === ""){
                console.log('Customer email cannot be empty');
                alert('Customer email cannot be empty');
                return false;  
            }

            if (!validateEmail(updatedDetails)) {
                console.log('Invalid Format for Customer Email or cannot be empty');
                alert('Invalid Format for Customer Email or cannot be empty');
                return false;
            }
        }

        if (colName === "CustomerContactNo"){
            if (updatedDetails === "") {
                console.log('Customer contact number cannot be empty');
                alert('Customer contact number cannot be empty');
                return false;
            }

            if (!validateContactNo(updatedDetails)) {
                console.log('Invalid Format for Customer Contact No or cannot be empty');
                alert('Invalid Format for Customer Contact No or cannot be empty');
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
        return true;
    }

    //takes in values to submit to api upon button click
    document.getElementById('customerUpdateBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const colName = document.getElementById('updateSelectStatus').value;
        const updatedDetails = document.getElementById('NewDetails').value;
        const customerID = document.getElementById('uCustomerID').value;

        if (!validateInput()) return;

        updateCustomer(colName, updatedDetails, customerID);
    });
});