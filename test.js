//document.getElementByDi("resultadoSuma").innerHTML= 1+2;
document.addEventListener("DOMContentLoaded", function() {
    const name = document.querySelector("#userName");
    const button = document.querySelector("#enviar");
    button.disable = true;

    name.onkeyup = () =>{
        if(name.ariaValueMax.length>0){
            button.disable=false;
        }else{
            button.disable=true;
        }
    };
    document.querySelector("#form1").onsubmit = () =>{
        document.getElementById("resultado").innerHTML="Hola" + name.value;
        //no recargar la página
        return false;
    };
});