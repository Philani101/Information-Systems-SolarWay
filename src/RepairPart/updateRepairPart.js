//updateJob
async function updateRepair(updateRepairID, updateRepairStatus){
    try{
        const response = await fetch('/api/updateRepair', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({ 
                updateRepairID: updateRepairID,
                updateRepairStatus: updateRepairStatus,

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
    async function populateRepairs(){
        try{
            const response = await fetch('/api/getRepairs');
            if (!response.ok){
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('updateInputRepair');
            listbox.innerHTML = '<option value="">Select a repair</option>';

            options.forEach(option =>{
                const opt = document.createElement('option');
                opt.value = option.RepairID;
                opt.textContent = option.repairdescription + ' problem for ' +option.CustomerFName + ' ' + option.CustomerLName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch repairs', error);
        }
    }
    populateRepairs();

    document.getElementById('updateInhousebtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();
    
        const updateRepairID = document.getElementById('updateInputRepair').value;
        const updateRepairStatus = document.getElementById('updateSelectStatus').value;
        updateRepair(updateRepairID, updateRepairStatus);
    });
});