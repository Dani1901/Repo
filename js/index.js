$(document).ready(function(){
	$(".button-collapse").sideNav();//Invocacion a reponsive
	document.getElementById('btnIngresar').addEventListener('click',validar);//Jalar los valores del input
	
}); 

function validar(usuario,pass){
	var username=document.getElementById('user').value;
	var pass=document.getElementById('pass').value;
	


	console.log("Leggo validar");
	alert(username + "  "+pass);

}


