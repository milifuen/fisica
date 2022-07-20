function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
preguntasArray = ["Demostrar bajo que condiciones el momento lineal de un sistema se mantiene constante ¿Son válidas para un SNI?", "Suponga que actúa una fuerza externa constante en el tiempo sobre un sistema de partículas; para un tiempo lo suficientemente corto ¿Puede afirmarse que el momento lineal de ese sistema es aproximandamente constante? Justificar mediante una demostración o mediante un contraejemplo","Suponga que tira una pelota de masa M perfectamente elástica contra una pared con velocidad V0 y ésta rebota, hacer un esquema de la curva fuerza vs tiempo ¿Cuanto vale el área bajo esa curva?","Deducir la ecuacion del potencial efectivo para el caso de la fuerza gravitatoria","Graficar de forma aproximada el potencial efectivo y usarlo para categorizar los distintos posibles tipos de orbita en términos de su aproximacion maxima/minima al origen. Indicar en qué punto de las mismas la velocidad angular es maxima. Si en algún momento de la trayectoria la velocidad angular se hace 0 ¿como es entonces la forma de dicha trayectoria?","Dar un ejemplo de movimiento de cuerpo rigido en el cual el momento angular y la velocidad angular no sean vectores paralelos","Si la resultante de las fuerzas que actuan sobre un cuerpo rigido se anula ¿es cierto que el torque total tambien se anula?", "Suponga un sistema de particulas interactuantes para el cual vale la condicion de rigidez en ausencia de fuerzas externas ¿Es o no constante la energia de dicho sistema en el tiempo?Justificar", "El momento de inercia de una esfera solida es mayor o menor que el de una esfera hueca?","Dar un ejemplo de masa M moviéndose sobre la superficie de la tierra tal que la fuerza de Coriolis se cancela perfectamente con la fuerza peso (especificar la velocidad V de la partícula, su dirección, y en qué punto de la superficie se encuentra). Lo mismo pero ahora para la fuerza centrífuga.","Hay una franja de algunos pocos kilómetros alrededor del ecuador en la cual jamás se han detectado ciclones, ¿A qué se debe?","Suponga que la sumatoria de las fuerzas externas de un rígido es igual a 0, ¿Eso significa que L es constante?","Escribir cuánto vale la energía total de un cuerpo rígido e interpretar cada término","¿Por qué no es necesario agregar un término de energìa potencial de interacción entre las partículas que componen el rígido?", "Explique por qué existe un r_mínimo, ¿Qué principio de conservación se violaria si r fuese menor a r_mínimo?","Cavendish midió la constante de gravitación G en su laboratorio. A partir de eso de convirtió en el hombre que pesó La Tierra. Explique por qué conocer G le permitió conocer la masa de la Tierra", "Suponga que O es un sistema de referencia donde valen las leyes de Newton. ¿Qué debe sumplir O' (otro sistema) para que también valgan?", "¿Cómo calcularías tu masa en ausencia de gravedad?", "¿Por qué hay más gravedad en los polos que en el Ecuador?", "¿Qué significa que una masa tenga 3kg?", "¿Cómo hubiese sigo la tercer ley de Kepler (relación entre periodos y radios) si la ley de atracción gravitatoria universal fuera |F| = GMm/R en vez de |F|= GMm/R²", "Una caja se encuntra apoyada sobre el piso de un camión que parte del reposo con una aceleración constante a. Hay fricción entre piso y caja con coeficientes de rozamiento estático y dinámico μe y μd. Proponga valores de a, μe y μd talque en el movimiento subsecuente visto desde la ruta el trabajo de la fuerza de rozamiento dinámico sobre la caja sea positivo", "Verdadero o falso: Se dejan caer desde una terraza dos cuerpos rígidos idénticos de forma simultánea. Uno rota (Ω ≠ 0) y el otro no (Ω = 0). Despreciando efectos debidos al aires ambos tocan el suelo al mismo tiempo", "Verdadero o falso: Si sobre un rígido no se aplica ninguna fuerza externa, entonces su velocidad angular es constante", "Verdadero o falso: El torque neto sobre un rígido puede ser no nulo aunque la suma de las fuerzas externas sea 0", "Te sacaste un 10 pibe"]


console.log(preguntasArray.length)





const btn = document.getElementsByTagName("button");
function funcion() {
    
    let preg = document.getElementsByClassName("preguntas");
    preg[0].textContent = '';
    let numero = getRandomInt(preguntasArray.length)
    console.log(preguntasArray[numero])
    let preguntita = preguntasArray[numero]
    let tag = document.createElement("p")
    let text = document.createTextNode(preguntita)
    tag.appendChild(text)
    preg[0].appendChild(tag)
};
btn[0].addEventListener("click", funcion);