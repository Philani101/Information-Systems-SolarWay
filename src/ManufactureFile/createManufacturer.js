//createNewManufacturer
async function createNewManufacturer(manufacturerName, manufacturerEmail, manufacturerContactNo, manufacturerAddress) {
    try {
        const response = await fetch('/api/createNewManufacturer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                manufacturerName: manufacturerName,
                manufacturerEmail: manufacturerEmail,
                manufacturerContactNo: manufacturerContactNo,
                manufacturerAddress: manufacturerAddress,

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
    function validateContactNo(updatedDetails) {
        const customerContactNoRegex = /^(?:\+?\d{1,3})?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{4,}$/;
        return customerContactNoRegex.test(updatedDetails);
    }

    //validate email address
    function validateEmail(updatedDetails) {
        const customerEmailRegex = /^\S+@\S+\.\S+$/;
        return customerEmailRegex.test(updatedDetails);
    }

    //validate whether input is empty
    function validateInput() {

        const manufacturerName = document.getElementById('manufacturerName').value;
        const manufacturerEmail = (document.getElementById('manufacturerEmail').value);
        const manufacturerContactNo = document.getElementById('manufacturerContactNo').value;
        const manufacturerAddress = document.getElementById('manufacturerAddress').value;

        if (manufacturerName === "") {
            console.log('manufacturer name cannot be empty');
            alert('manufacturer name cannot be empty');
            return false;
        }

        if (!manufacturerEmail || manufacturerEmail === "") {
            console.log('invalid format or manufacturer email cannot be empty');
            alert('invalid format or manufacturer email cannot be empty');
            return false;
        }

        if (!manufacturerContactNo || manufacturerContactNo === "") {
            console.log('invalid format or manufacturer contact cannot be empty');
            alert('invalid format or manufacturer contact cannot be empty');
            return false;
        }

        if (manufacturerAddress === "") {
            console.log('manufacturer name cannot be empty');
            alert('manufacturer name cannot be empty');
            return false;
        }

        return true;
    }

    document.getElementById('createnewmanufacturerSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const manufacturerName = document.getElementById('manufacturerName').value;
        const manufacturerEmail = (document.getElementById('manufacturerEmail').value);
        const manufacturerContactNo = document.getElementById('manufacturerContactNo').value;
        const manufacturerAddress = document.getElementById('manufacturerAddress').value;

        if (!validateInput()) return;

        createNewManufacturer(manufacturerName, manufacturerEmail, manufacturerContactNo, manufacturerAddress);
    });
});