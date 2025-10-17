async function createUnit(unitName, unitBrand, unitType, unitSize) {
    try {
        const response = await fetch('/api/createUnit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                unitName: unitName,
                unitBrand: unitBrand,
                unitType, unitType,
                unitSize: unitSize,
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

        const unitName = document.getElementById('unitName_input').value;
        const unitBrand = (document.getElementById('unitBrand_input').value);
        const unitType = document.getElementById('unitType_input').value;
        const unitSize = document.getElementById('unitSize_input').value;

        if (unitName === "") {
            console.log('Unit Name cannot be empty');
            alert('Unit Name cannot be empty');
            return false
        }

        if (unitBrand === "") {
            console.log('Unit Brand cannot be empty');
            alert('Unit Brand cannot be empty');
            return false
        }

        if (unitType === "") {
            console.log('Unit Type cannot be empty');
            alert('Unit Type cannot be empty');
            return false
        }

        if (unitSize === "") {
            console.log('Unit Size cannot be empty');
            alert('Unit Size cannot be empty');
            return false
        }

        return true;
    }

    document.getElementById('CreateUnitbtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const unitName = document.getElementById('unitName_input').value;
        const unitBrand = (document.getElementById('unitBrand_input').value);
        const unitType = document.getElementById('unitType_input').value;
        const unitSize = document.getElementById('unitSize_input').value;

        if (!validateInput()) return;

        createUnit(unitName, unitBrand, unitType, unitSize);
    });
});