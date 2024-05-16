function validateForm(e) {
    let name = document.getElementById("name").value;

    if (name.trim().length === 0) {
        alert("Please enter your name");
    }

    let email = document.getElementById('email').value;
    let emailError = document.getElementById('email-error');

    console.log(email);
    console.log(emailError);
    let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!email.match(emailCheck)) {
        e.preventDefault();
        window.alert("Please enter a valid email address");
        return false;
    }
    emailError.innerHTML = "";
    alert("Registration succesful");
    return true;
}


function currentDate() {
    let currDate = new Date();
    let month = currDate.getMonth() + 1;
    let year = currDate.getFullYear();
    let day = currDate.getDate();
    if (month < 10)
        month = '0' + month;
    return year + "-" + month + "-" + day;
}