const part = [];

//populate textboxes
async function populatePartBox(PartID) {
    const { PartQuantity } = part[PartID - 1];
    // document.getElementById('PartName').value = PartName;
    document.getElementById('Quantity').value = PartQuantity;
}

//populate listbox
async function populatePart() {
    try {
        const response = await fetch('/api/getPartID');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('PartID');
        listbox.innerHTML = '<option value="">select a Part </option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.PartID;
            opt.text = option.PartID + ' ' + option.PartName;
            listbox.appendChild(opt);
            part.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch parts', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populatePart();

    document.getElementById('PartID').addEventListener('change', function (event) {
        const PartID = event.target.value;
        //console.log(repairID);
        //console.log(inhouse);
        populatePartBox(PartID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});