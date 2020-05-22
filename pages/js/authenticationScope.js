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

    if(txtEmail.value.length < 6 || txtEmail.value.indexOf("@") <= 0 || 
        txtEmail.value.lastIndexOf(".") <= txtEmail.value.indexOf("@")) {
            alert("Enter a valid email");
            txtEmail.focus();
            return false;
    }

    if(nrTelephone.value.length < 11 || nrTelephone.value == "") {
        alert("Enter the phone correctly");
        nrTelephone.focus();
        return false;
    }

    var cpf = txtCpf.value;
    if(!validaCPF(cpf)){
        alert("Enter the CPF correctly");
        txtCpf.focus();
        return false;
    }

}

function validaCPF(cpf)
  {
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
          return false;
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          numeros = cpf.substring(0,9);
          digitos = cpf.substring(9);
          soma = 0;
          for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                return false;
          numeros = cpf.substring(0,10);
          soma = 0;
          for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                return false;
          return true;
          }
    else
        return false;
  }