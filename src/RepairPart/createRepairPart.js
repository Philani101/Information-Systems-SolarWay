//createInhouse
async function createRepairPart(repairID, partID){
    try{
        const response = await fetch('/api/createRepairPart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({ 
                repairID: repairID,
                partID: partID,

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
            const listbox = document.getElementById('repairID');
            listbox.innerHTML = '<option value="">Select a repair</option>';

            options.forEach(option =>{
                const opt = document.createElement('option');
                opt.value = option.RepairID;
                opt.textContent = option.RepairID + ' '+ option.repairdescription + ' problem for ' +option.CustomerFName + ' ' + option.CustomerLName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch repair', error);
        }
    }
    populateRepairs();

    async function populatePart(){
        try{
            const response = await fetch('/api/getPartID');
            if (!response.ok){
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('partID');
            listbox.innerHTML = '<option value="">select a part</option>';

            options.forEach(option =>{
                const opt = document.createElement('option');
                opt.value = option.PartID;
                opt.textContent = option.PartName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch part', error);
        }
    }
    populatePart();

    //validate whether input is empty
    function validateInput() {
            const repairID = document.getElementById('repairID').value;
            const partID = (document.getElementById('partID').value);

            if (!repairID){
                console.log('Repair cannot be empty');
                alert('Repair cannot be empty');
                return false
            }

            if (!partID){
                console.log('Part cannot be empty');
                alert('Part cannot be empty');
                return false
            }
            
            return true;
    }

    document.getElementById('CreateRepairPartbtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();
    
        const repairID = document.getElementById('repairID').value;
        const partID = (document.getElementById('partID').value);

        if (!validateInput()) return;
        
        createRepairPart(repairID, partID);
    });
});