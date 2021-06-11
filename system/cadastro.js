function validacpf(){
    var cpf = document.getElementById("cpf")
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11)  {
        cpf.value += "-"
    }else if (cpf.value == typof(text)){
        window.alert("Por favor informe apenas números")
    }
}

function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

  VMasker(document.getElementById("frmCpf")).maskPattern("999.999.999-99");

  function cdt()
  {
      var nome = window.document.getElementById("nome")
      var end = window.document.getElementById("end")
      var tel = window.document.getElementById("phone")
      var cpf = window.document.getElementById("frmCpf")
      var res = window.document.getElementById("res")
      var nome1 = nome.value
      var end1 = end.value
      var tel1 = tel.value
      var cpf1 = cpf.value

      if (nome.value.length == 0 || end.value.length == 0 || tel.value.length == 0 || cpf.value.lengh == 0)
      {
          window.alert("Por favor preencha os dados corretamente")
      } else if (cpf.value.length <= 13 || tel.value.length <= 13)
      {
          window.alert("Dados informados incorretamente. Por favor verfique.")
      } else {
    
        res.innerHTML = (`<p><strong>Esses são seus dados de cadastro:</strong></p>
                            <p><strong>Nome:</strong> ${nome1}</p>
                            <p><strong>Endereço:</strong> ${end1}</p>
                            <p><strong>CPF:</strong> ${cpf1}</p>
                            <p><strong>Telefone:</strong> ${tel1}</p>`)
    }
     
    
  }