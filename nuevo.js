var inputs =document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

function showContent() { 
    if(document.getElementById ('flexRadioDefault1').checked){
        
        element = document.getElementById("content");
        check = document.getElementById("check");
        element.style.display='block';

    }
    if(document.getElementById ('flexRadioDefault2').checked){
        alert("Sera en otra oportunidad")
        element.style.display='none';
    

    }
}
function upperCase() {
    var text = document.getElementById("nombre");
    text.addEventListener("blur", blur, true);
    if (text.checked == false)
        alert(""+text.value.toUpperCase())
 }


 function validarClaves(){
    var password1= document.getElementById.value;
    var password2 = document.getElementById.value;
    if (password1 != password2) {
        alert ("Las claves introducidas no son iguales");
        return false;
        }
        else {
        alert("Contraseña correcta");
        return true;
        }
}