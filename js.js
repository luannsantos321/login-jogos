

function password(){

    const numeros = ["1","2","3","4","5","6","7","8","9", "0"];
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (null){

    } ;
    if (alfabeto.includes("senha")){
        alert.log("ok");
    }else{
        document.getElementById("resultado").innerHTML = "Deve conter letra";
    };
    if (numeros.includes("senha")){
       alert("ok");
    }else{
        document.getElementById("resultado").innerHTML = "deve conter um numero";
    };
};
password();