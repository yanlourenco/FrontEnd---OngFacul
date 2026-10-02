function mascaraCPF(campo) {
  if (campo.value.length == 3 || campo.value.length == 7) {
    campo.value = campo.value + ".";
  } else if (campo.value.length == 11) {
    campo.value = campo.value + "-";
  }
}

function mascaraTelefone(campo) {
  if (campo.value.length == 0) {
    campo.value = "(" + campo.value;
  } else if (campo.value.length == 3) {
    campo.value = campo.value + ") ";
  } else if (campo.value.length == 10) {
    campo.value = campo.value + "-";
  }
}

function mascaraCEP(campo) {
  if (campo.value.length == 5) {
    campo.value = campo.value + "-";
  }
}

function enviarFormulario() {
  alert("Cadastro realizado com sucesso!");
}


/*Mascarás pegas na IA */