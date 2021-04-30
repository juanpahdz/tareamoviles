numeroEntero = (num) => {
    while( typeof parseInt(num) !== 'number' || num % 1 !== 0 || num == "" ){
        num = prompt('El numero ingresado no es un numero entero, Por favor ingresar un numero correcto')
    }
    return num
}

reversarNumero = ( text ) => {
    text = '' + text
    let newString = ''

    for(i=0; i<text.length; i++){
        const value = text.length - i - 1
        newString += '' + text[value]
    }

   return newString
}

const valueUser = numeroEntero(prompt('Ingrese un numero entero'))
alert('Resultado: ' + reversarNumero(valueUser) )
