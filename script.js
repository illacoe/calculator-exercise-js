const screen = document.getElementById('calculator-screen'), keys = document.getElementById('calculator-keys')
let operationStatus = false, number1, typeOperation
screen.textContent='0'

const calculator = () => {
    if(!keys) return // si keys se vuelve null  hacer return
    keys.addEventListener('click', e => {
        const t = e.target,
              d = t.dataset
         //detectar si se pulso un numero
        if(d.number) writeScreen(d.number)
        //detectar si se pulso un operacion math
        if(d.math) getOperation(t,d.math)
        //detectar si se pulso un otra operacion
        if(d.operation) runOperation(d.operation)
    })
}

const writeScreen = number => {
    // si screen.textContent es igual al string '0' ó operationStaus es igual a true
    screen.textContent === '0' || operationStatus === true 
        ?screen.textContent = number //si es igual remplazar por numero pulsado
        :number === '.' && !screen.textContent.includes('.')
            ? screen.textContent += number
            : number !== '.'
                ?screen.textContent += number //si no es igual concatenar numeros
                :null
    operationStatus=false
}

const getOperation = (element,operation)=> {
    operationStatus=true // este true indica que en la pantalla hay un simbolo 
    number1 = Number(screen.textContent), // guardo el numero en pantalla; Number() transforma string a numero
    typeOperation = operation // guardo el tipo de operacion  
    screen.textContent = element.textContent
    // console.log(`${operation}`) 
}

const runOperation = operation =>{
    const getResult = (number1, typeOperation) =>{
    const number2 = Number(screen.textContent)
    let result

    switch(typeOperation){
        case 'add':  result = number1 + number2
        break;
        case 'minus': result = number1 - number2
        break;
        case 'multiply': result = number1 * number2
        break;
        case 'divide': result = number1/number2
        break;
        default:break;
        }
    result === Infinity
        ?screen.textContent='Error'
        :screen.textContent=result
    }
 
    operation === 'clear'
    ?screen.textContent = '0'
    :getResult(number1,typeOperation) 
    operationStatus=true
}

calculator()