function multiplicar(){
	baseImponible = document.getElementById("BaseImponible").value;
	iva = document.getElementById("Iva").value;
	resultado = parseFloat(baseImponible)+ parseFloat(baseImponible*(iva/100));
	document.getElementById("Total").value = resultado;
	}