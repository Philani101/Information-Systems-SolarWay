//login
async function login(StaffID, Password) {
    try {
        const response = await fetch('/api/userLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                StaffID: StaffID,
                Password: Password,

            })
        });

        const status = await response.text();
        if (status === 'Technician') {
            alert('Logged in as:', status);
            // sessionStorage.setItem('StaffID', StaffID);
            // console.log(localStorage.getItem('StaffID'));
            window.location.href = '../Technician/TechnicianJob/CreateJob.html';
        } else if (status === 'Admin') {
            alert('Logged in as:', status);
            window.location.href = '../CreateRepair/CreateRepair_page.html';
        } else {
            alert(status);
        }

    } catch (error) {
        console.log(error);
        alert(error);

    }
}

function validateinput(StaffID, Password) {
    if (!StaffID || !Password) {
        alert('fields cannot be empty');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault();

        const StaffID = document.getElementById('username').value;
        const Password = document.getElementById('userPassword').value;

        if (validateinput(StaffID, Password)) {
            login(StaffID, Password);
        }

    })

})
