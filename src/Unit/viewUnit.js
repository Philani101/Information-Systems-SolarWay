const unit = [];

//populate textboxes
async function populateUnitBox(UnitID) {
    const { UnitName, UnitBrand, UnitType, UnitSize } = unit[UnitID - 1];
    document.getElementById('UnitName').value = UnitName;
    document.getElementById('UnitBrand').value = UnitBrand;
    document.getElementById('UnitType').value = UnitType;
    document.getElementById('UnitSize').value = UnitSize;
}

//populate listbox
async function populateUnit() {
    try {
        const response = await fetch('/api/getUnit');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('UnitID');
        listbox.innerHTML = '<option value="">select a Unit </option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.UnitID;
            opt.text = option.UnitID + ' ' + option.UnitName;
            listbox.appendChild(opt);
            unit.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch units', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populateUnit();

    document.getElementById('UnitID').addEventListener('change', function (event) {
        const UnitID = event.target.value;
        //console.log(repairID);
        //console.log(inhouse);
        populateUnitBox(UnitID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});