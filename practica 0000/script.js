function registrar(){
    let Nombre=document.getElementById("Nombre").value;
    let ApellidoPaterno=document.getElementById("Paterno").value;
    let ApellidoMaterno=document.getElementById("Materno").value;
    let Telefono=document.getElementById("Numero").value;
    let Direccion=document.getElementById("Direccion").value; 
    let CorreoElectronico=document.getElementById("Correo").value;

    document.getElementById("resultadoNombre").innerHTML=
    "Nombre:" + Nombre;
    document.getElementById("resultadoPaterno").innerHTML=
    "Apellido Paterno:" + Paterno;
    document.getElementById("resultadoMaterno").innerHTML=
    "Apellido Materno:" + ApellidoMaterno;
    document.getElementById("resultadoNumero").innerHTML=
    "Telefono:" + Numero;
    document.getElementById("resultadoDireccion").innerHTML=
    "Direccion:" + Direccion;
    document.getElementById("resultadoCorreo").innerHTML=
    "Nombre:" + CorreoElectronico;
}