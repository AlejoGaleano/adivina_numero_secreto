const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };
    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
        
        /* se añande el parseInt ya que sino se lo toma como un string y nunca se va a cumplir la condicion que se compare numero con numero */
        numeroAdivinado = parseInt(numeroAdivinado,10)

        if (numeroAdivinado === numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
        } else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
        } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
        }
        };
    module.exports = {
        generarNumeroAleatorio,
        verificarAdivinanza
        };
    