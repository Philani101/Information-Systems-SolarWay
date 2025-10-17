const customer = [];

//populate textboxes
async function populateCustomerBox(CustomerID) {
    const { CustomerFName, CustomerLName, CustomerEmail, CustomerContactNo, CustomerAddress } = customer[CustomerID - 1];
    document.getElementById('CustomerFName').value = CustomerFName;
    document.getElementById('CustomerLName').value = CustomerLName;
    document.getElementById('CustomerEmail').value = CustomerEmail;
    document.getElementById('CustomerContactNo').value = CustomerContactNo;
    document.getElementById('CustomerAddress').value = CustomerAddress;

    //console.log(RepairID);
}

//populate listbox
async function populateCustomer() {
    try {
        const response = await fetch('/api/getCustomer');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('CustomerID');
        listbox.innerHTML = '<option value="">select a Customer </option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.CustomerID;
            opt.text = option.CustomerID + ' ' + option.CustomerFName + ' ' + option.CustomerLName;
            listbox.appendChild(opt);
            customer.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch customers', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populateCustomer();

    document.getElementById('CustomerID').addEventListener('change', function (event) {
        const CustomerID = event.target.value;
        populateCustomerBox(CustomerID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});