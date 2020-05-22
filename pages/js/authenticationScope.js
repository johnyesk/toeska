// Authentication scope
function validation() {
    if(txtName.value.length < 3 || txtName.value == ""){
        alert("Type your name");
        txtNome.focus();
        return false;
    }

    if(txtPassword01.value.length < 6 || isNaN(txtPassword01.value) == false){
        alert("Password must contain at least 6 digits");
        txtPassword01.focus();
        return false;
    }

    if(txtPassword02.value != txtPassword01.value) {
        alert("Incorrect confirmation password");
        txtPassword02.focus();
        return false;
    }

    if(txtEmail.value.length < 6 || 
        txtEmail.value.indexOf("@") <= 0 || 
        txtEmail.value.lastIndexOf(".") <= txtEmail.value.indexOf("@")) {
            alert("Enter a valid email");
            txtEmail.focus();
            return false;
    }
}