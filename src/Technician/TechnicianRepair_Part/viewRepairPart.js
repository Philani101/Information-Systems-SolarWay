const repairpart = [];

//populate textboxes
async function populateRepairBox(RepairPartID) {
    const { RepairID, PartID } = repairpart[RepairPartID - 1];
    document.getElementById('RepairID').value = RepairID;
    document.getElementById('PartID').value = PartID;
}

//populate listbox
async function populateRepairPart() {
    try {
        const response = await fetch('/api/getRepairPart');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('RepairPartID');
        listbox.innerHTML = '<option value="">select a RepairPartID</option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.RepairPartID;
            opt.text = option.RepairPartID;
            listbox.appendChild(opt);
            repairpart.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch repair parts', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populateRepairPart();

    document.getElementById('RepairPartID').addEventListener('change', function (event) {
        const RepairPartID = event.target.value;
        //console.log(repairID);
        //console.log(inhouse);
        populateRepairBox(RepairPartID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});