//updateJob
async function updateJob(updatejobID, updatehoursWorked) {
    try {
        const response = await fetch('/api/updateJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                updatejobID: updatejobID,
                updatehoursWorked: updatehoursWorked,
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
    async function populateJobID() {
        try {
            const response = await fetch('/api/getJobID');
            if (!response.ok) {
                throw new Error('Reponse not ok');
            }
            const options = await response.json();
            console.log(options);
            const listbox = document.getElementById('UpdateJobID');
            listbox.innerHTML = '<option value="">select a job</option>';

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.JobID;
                opt.text = option.JobID + ' ' + option.StaffFName + ' fixing ' + option.repairdescription + ' problem for ' + option.CustomerFName + ' ' + option.CustomerLName;
                listbox.appendChild(opt);
            });
        } catch (error) {
            console.log('Cannot fetch JobID', error);
        }
    }
    populateJobID();

    //validate whether input is empty
    function validateInput() {
        const updatejobID = document.getElementById('UpdateJobID').value;
        const updatehoursWorked = document.getElementById('UpdateHoursWorkedInput').value;

        if (!updatejobID) {
            console.log('Job cannot be empty');
            alert('Job cannot be empty');
            return false;
        }

        if (updatehoursWorked === "") {
            console.log('Hours Worked cannot be empty');
            alert('Hours Worked cannot be empty');
            return false;
        }

        return true;
    }

    document.getElementById('UpdateJob_btnSubmit').addEventListener('click', function (event) {
        event.preventDefault();

        const updatejobID = document.getElementById('UpdateJobID').value;
        const updatehoursWorked = document.getElementById('UpdateHoursWorkedInput').value;

        if (!validateInput()) return;

        updateJob(updatejobID, updatehoursWorked);
        console.log(updatejobID, updatehoursWorked);
    });
});