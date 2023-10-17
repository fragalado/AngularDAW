import { Pregunta } from "./pregunta";

export const PREGUNTAS: Pregunta[] = [
    { pregunta: "¿Cómo se define TypeScript?", respuesta: "TypeScript es un lenguaje de programación de código abierto. Es un superset de JavaScript, lo que significa que añade características y funcionalidades adicionales a JavaScript. La característica principal de TypeScript es que permite especificar el tipo de datos que una variable puede contener."},
    { pregunta: "¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?", respuesta: "La principal diferencia es que en TypeScript podemos especifiar el tipo de una variable mientras que en JavaScript no se puede."},
    { pregunta: "Muestra la lista de tipos básicos de TypeScript.", respuesta: "number, string, boolean, null, undefined, array, tupla, object"},
    { pregunta: "¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?", respuesta: "Con Interface, Type y Union"},
    { pregunta: "¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.", respuesta: "No, TypeScript no se puede ejecutar directamente en un navegador web, ya que los navegadores web solo entienden JavaScript. Sin embargo, puedes escribir tu código en TypeScript y luego transpilarlo a JavaScript para que pueda ser ejecutado en un navegador."},
    { pregunta: "Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?", respuesta: "La razón por la que puedes ver tanto el código TypeScript como el código JavaScript en las herramientas del desarrollador del navegador es gracias a los Source Maps"},
    { pregunta: "¿Para qué sirve el archivo tsconfig.json?", respuesta: "El archivo tsconfig. json es el que indica en un proyecto que se está trabajando con TypeScript"}
]