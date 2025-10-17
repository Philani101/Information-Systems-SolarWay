//Nav
document.addEventListener('DOMContentLoaded', function(){
    const button1 = document.getElementById('InHousebtn');
    const button2 = document.getElementById('Manufacturebtn');
    
    function navigationPages1() {
        window.location.href = '../CreateRepair/Inhouse.html';
    }
    
    function navigationPages2() {
        window.location.href = '../CreateRepair/Manufacture.html';
    }
    
    if (button1) {
        button1.addEventListener('click', navigationPages1);
        console.log('yes');
    }
    
    if (button2) {
        button2.addEventListener('click', navigationPages2);
        console.log('yes');
    }

});

