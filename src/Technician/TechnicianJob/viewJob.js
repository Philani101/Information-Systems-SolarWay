const job = [];

//populate textboxes
async function populateJobBox(JobID) {
    const { StaffFName, StaffLName, repairdescription, JobHoursPlanned, JobHoursWorked } = job[JobID - 1];
    document.getElementById('StaffID').value = StaffFName + ' ' + StaffLName;
    document.getElementById('RepairID').value = repairdescription;
    document.getElementById('JobHourPlanned').value = JobHoursPlanned;
    document.getElementById('JobHoursWorked').value = JobHoursWorked;
}

//populate listbox
async function populateRepair() {
    try {
        const response = await fetch('/api/viewJob');
        if (!response.ok) {
            throw new Error('Reponse not ok');
        }
        const options = await response.json();
        //console.log(options);
        const listbox = document.getElementById('JobID');
        listbox.innerHTML = '<option value="">select a Job</option>';

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.JobID;
            opt.text = option.StaffFName + ' fixing ' + option.repairdescription + ' problem for ' + option.CustomerFName + ' ' + option.CustomerLName;
            listbox.appendChild(opt);
            job.push(option);
        });
    } catch (error) {
        console.log('Cannot fetch jobs', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    populateRepair();

    document.getElementById('JobID').addEventListener('change', function (event) {
        const JobID = event.target.value;
        //console.log(repairID);
        //console.log(inhouse);
        populateJobBox(JobID);
    })

    // document.getElementById('Update_UnitbtnSubmit').addEventListener('click', function (event) {
    //     event.preventDefault();

    // });
});