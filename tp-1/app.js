var valorA = prompt('Hola! Ingresa un número del 1 al 100')
var rtValorA = alert('Perfecto!')
var valorB = prompt('Ahora ingresa otro número del 1 al 100')
var rtValorB = alert('estos son tus resultados:')

valorA = Number(valorA)
valorB = Number(valorB)


var rtValoresSuma = valorA + valorB
var rtValoresResta = valorA - valorB
var rtValoresMultiplicacion = valorA * valorB
var rtValoresDivision = valorA / valorB
var rtValoresResto = valorA % valorB
var rtValoresPotenciacion = valorA ** valorB

alert('Sumados da por resultado:' + rtValoresSuma)
alert('Restados da por resultado:' + rtValoresResta)
alert('Multiplicados da por resultado:' + rtValoresMultiplicacion)
alert('Divididos da por resultado:' + rtValoresDivision)
alert('Restados da por resultado:' + rtValoresResto)
alert('La potencia da por resultado:' + rtValoresPotenciacion)
