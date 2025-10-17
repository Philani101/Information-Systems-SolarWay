async function updatePart(upartID, upartQuantity) {
    try {
        const response = await fetch('/api/updatePart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                upartID: upartID,
                upartQuantity: upartQuantity,
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
    //populate listbox
    async function populatePartID() {
        try {
            const response = await fetch('/api/getPartID');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('upartID_input');
            listbox.innerHTML = '<option value="">select a Part </option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.PartID;
                opt.textContent = option.PartName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch PartID', error);
        }
    }
    populatePartID();

    function validateInput() {
        const upartID = document.getElementById('upartID_input').value;
        const upartQuantity = document.getElementById('uQuantity').value;

        if (!upartID) {
            console.log('Part cannot be empty');
            alert('Part cannot be empty');
            return false;
        }

        if (upartQuantity === "") {
            console.log('Part Quantity cannot be empty');
            alert('Part Quantity cannot be empty');
            return false;
        }

        return true;
    }

    document.getElementById('updateunitButton').addEventListener('click', function (event) {
        event.preventDefault();

        const upartID = document.getElementById('upartID_input').value;
        const upartQuantity = document.getElementById('uQuantity').value;

        if (!validateInput()) return;

        updatePart(upartID, upartQuantity);
    });
});