var valorX = prompt('Hola! Ingresa un número')
var valorY = prompt('Ahora ingresa otro número')
var operacion = prompt ('Queres sumar, restar, multiplicar o dividir?')

valorX = Number(valorX)
valorY = Number(valorY)



switch (operacion) {
	case 'sumar':
	var resultadoS = valorX + valorY
	console.log(resultadoS)
	break

	case 'restar':
	var resultadoR = valorX - valorY
	console.log(resultadoR)
	break

	case 'multiplicar':
	var resultadoM = valorX*valorY
	console.log (resultadoM)
	break

	case 'dividir':
	var resultadoD = valorX/valorY
	console.log (resultadoD)
	break

	default:
	console.log('No se puede realizar la operacion')
	break
}

