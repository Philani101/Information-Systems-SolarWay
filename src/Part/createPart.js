async function createPart(partName, partQuantity) {
    try {
        const response = await fetch('/api/createPart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                partName: partName,
                partQuantity: partQuantity,
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
        const partName = document.getElementById('partName_input').value;
        const partQuantity = (document.getElementById('Quantity').value);

        if (partName === "") {
            console.log('Part Name cannot be empty');
            alert('Part Name cannot be empty');
            return false
        }

        if (partQuantity === "") {
            console.log('Part Quantity cannot be empty');
            alert('Part Quantity cannot be empty');
            return false
        }

        return true;

    }

    document.getElementById('CreateUnitbtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const partName = document.getElementById('partName_input').value;
        const partQuantity = (document.getElementById('Quantity').value);

        if (!validateInput()) return;

        createPart(partName, partQuantity);
    });
});