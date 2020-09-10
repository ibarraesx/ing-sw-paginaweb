function register(){
    var usuario = document.getElementById("usr").value;
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var bday = document.getElementById("bday").value;

        if(usuario == ''){
        alert("Falta ingresar el nombre de usuario")
        }    
        if(name == ''){
        alert("Falta ingresar el nombre")
        }
        if(mail == ''){
        alert("Falta ingresar el correo electronico")
        }
        if(bday == ''){
        alert("Falta ingresar la fecha de nacimiento")
        }
        alert("Usuario: " + usuario + "\nNombre: " + name + 
        "\nCorreo Electronico: " + mail + "\nFecha de Nacimiento: " + bday); 
}