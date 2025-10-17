//createJob 
async function createJob(staffID, repairID, hoursPlanned, hoursWorked, jobDescription) {
    try {
        const response = await fetch('/api/createJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                staffID: staffID,
                repairID: repairID,
                hoursPlanned: hoursPlanned,
                hoursWorked: hoursWorked,
                jobDescription: jobDescription,
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
    async function populateStaff() {
        try {
            const response = await fetch('/api/getStaff');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('InputStaffID');
            listbox.innerHTML = '<option value="">select a staff member</option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.StaffID;
                opt.textContent = option.StaffFName + ' ' + option.StaffLName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch staff member', error);
        }
    }
    populateStaff();

    async function populateRepairID() {
        try {
            const response = await fetch('/api/getRepairs');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('RepairID_input');
            listbox.innerHTML = '<option value="">select a repair </option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.RepairID;
                opt.text = option.RepairID + ' ' + option.repairdescription + ' problem for ' + option.CustomerFName + ' ' + option.CustomerLName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch RepairID', error);
        }
    }
    populateRepairID();

    //validate whether input is empty
    function validateInput() {
        const staffID = document.getElementById('InputStaffID').value;
        const repairID = document.getElementById('RepairID_input').value;
        const hoursPlanned = document.getElementById('JobHoursInput').value;

        if (!staffID) {
            console.log('Staff cannot be empty');
            alert('Staff cannot be empty');
            return false
        }

        if (!repairID) {
            console.log('Repair cannot be empty');
            alert('Repair cannot be empty');
            return false
        }

        if (hoursPlanned === "") {
            console.log('Hours Planned cannot be empty');
            alert('Hours Planned cannot be empty');
            return false
        }

        return true;
    }

    document.getElementById('CreateJobbtnSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const staffID = document.getElementById('InputStaffID').value;
        const repairID = document.getElementById('RepairID_input').value;
        const hoursPlanned = document.getElementById('JobHoursInput').value;
        const hoursWorked = 0;
        const jobDescription = document.getElementById('jobDescription').value;

        if (!validateInput()) return;

        createJob(staffID, repairID, hoursPlanned, hoursWorked, jobDescription);
        // console.log(hoursPlanned);
    });
});
