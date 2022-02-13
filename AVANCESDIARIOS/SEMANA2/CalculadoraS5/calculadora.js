let numeroa;
let numerob;
let numeror;

function operaciones(){
	let resultado = document.getElementById("resultado");
	let siete = document.getElementById("siete");
	let ocho = document.getElementById("ocho");
	let nueve = document.getElementById("nueve");
	let suma = document.getElementById("suma");
	let cuatro = document.getElementById("cuatro");
	let cinco = document.getElementById("cinco");
	let seis = document.getElementById("seis");
	let resta = document.getElementById("resta");
	let tres = document.getElementById("tres");
	let dos = document.getElementById("dos");
	let uno = document.getElementById("uno");
	let multiplicacion = document.getElementById("multiplicacion")
	let reset = document.getElementById("reset");
	let borrar= document.getElementById("borrar");
	let cero = document.getElementById("cero");
	let igual = document.getElementById("igual");
	let division = document.getElementById("division");
	let resultadoanterior= null; //wladixD

	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}
	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		resultado.textContent = resultado.textContent + "+";
		//numeroa = resultado.textContent; (anterior)
		numeror = "+";
		//limpiar();
	}
	resta.onclick = function(e){
		resultado.textContent = resultado.textContent + "-";
		//numeroa = resultado.textContent;
		numeror = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		resultado.textContent = resultado.textContent + e.target.textContent;
		//numeroa = resultado.textContent;
		numeror= "*";
		limpiar();
	}
	division.onclick = function(e){
		resultado.textContent = resultado.textContent + "/";
		//numeroa = resultado.textContent;
		numeror = "/";
		limpiar();
	}
	igual.onclick = function(e){
		numerob = resultado.textContent;
		resolver();
	}

	borrar.onclick = function(e){
		resultado.textContent= resultado.textContent.substring(0,resultado.textContent.length-1)
	}

function limpiar(){
	//resultado.textContent = "";
}
function resetear(){
	resultado.textContent = "";
	resultadoanterior=null;
	numeroa = 0;
	numerob = 0;
	numeror = "";
}
function resolver() {
    let tempres=null;
    let res = eval(resultado.textContent);
    if(resultadoanterior){
        switch (numeror) {
            case "+":
                tempres = resultadoanterior + res;
              break;
            case "-":
                tempres = resultadoanterior - res;
              break;
            case "*":
                tempres = resultadoanterior * res;
              break;
            case "/":
                tempres = resultadoanterior / res;
              break;
          }

    }
    else{
        tempres=res;
    }

  resultado.textContent = tempres;
  resultadoanterior = tempres;

}
// function resolver(){
// 	let res = eval(resultado.textContent);
// 	resultado.textContent=res;
// 	resultadoanterior=res;
// 	/*switch(numeror){
// 		case "+":
// 		res = parseFloat(numeroa) + parseFloat(numerob);
// 		break;
// 		case "-":
// 		res = parseFloat(numeroa) - parseFloat(numerob);
// 		break;
// 		case "*":
// 		res = parseFloat(numeroa) * parseFloat(numerob);
// 		break;
// 		case "/":
// 		res = parseFloat(numeroa) / parseFloat(numerob);
// 		break;
// 	}*/

	
// 	resetear();
// 	resultado.textContent = res;
// }
}