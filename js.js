document.getElementById("resultado").innerHTML = None
 function validNumber(){
 recebe = document.getElementById("senha");
 let resultNumber  = recebe.value.match(/[0-9]/g);
console.log(resultNumber);



if (!resultNumber){
   document.getElementById("resultado").innerHTML = "Deve conter numeros"
}else{
    document.getElementById("resultado").innerHTML = " "
}

 }
 validNumber()
