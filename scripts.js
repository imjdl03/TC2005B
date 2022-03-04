function confirmacion() {
    let mail = document.getElementById("mail_input").value;
    let name = document.getElementById("name_input").value;
    let info = "¡Revisa que tus datos esten correctos!" + "      " + "Correo: " +mail + "       " + "Nombre: " + name;
    window.alert(info)
  }