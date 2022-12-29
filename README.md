# ProyectoFinal-CI-CD
## Pipeline
Aqui escribre una descripción con imagen Alain
### Fases:

#### ANALYSIS
Se usó la herramienta SONARQUBE para el análisis estático del codigo
Aqui escribre una descripción con imagen Albert 

#### UNIT TEST

¿Qué es el Unit Testing?

El Unit testing, son trozos de código diseñados para comprobar que el código principal está funcionando como esperábamos. Estas pruebas forman parte de los diferentes procedimientos que podemos llevar a cabo en una metodología ágil.

El proceso que se lleva a cabo consta de tres partes:

Arrange: donde se definen los requisitos que debe cumplir el código principal.

Act: el proceso de creación, donde vamos acumulando los resultados que analizaremos.

Asert: se considera el momento en que comprobamos si los resultados agrupados son correctos o incorrectos. Dependiendo del resultado, se valida y continúa, o se repara, de forma que el error desaparezca.

Para ver si hay errores de integración es necesario realizar otro tipo de pruebas de software conjuntas y de esta manera comprobar la efectividad total del código.

¿Por qué hacer pruebas y por qué son tan importantes?

Hacer unit testing o pruebas es la forma de asegurarse que lo que queremos que haga nuestro programa, lo haga, y lo haga bien.

La construcción de software, una aplicación o un sitio web implica conocimiento, experiencia, talento, capacidad intelectual y un punto de arte. Es decir, es una labor muy difícil, y falta aún mucho para que eso cambie a mejor.

Los fallos y errores son inevitables si los intentamos evitar con solo nuestras capacidades humanas.

#### PERFORMANCE TEST
##### ¿Qué es Performance Testing?
O pruebas de rendimiento, es una medida de prueba que evalúa la velocidad, la capacidad de respuesta y la estabilidad de una computadora, red, programa de software o dispositivo bajo una carga de trabajo. Las organizaciones ejecutarán pruebas de rendimiento para identificar cuellos de botella relacionados con el rendimiento .

##### ¿Por qué utilizar pruebas de rendimiento?
Los desarrolladores pueden usar las pruebas de rendimiento como una forma de prueba de software para ayudar a identificar la naturaleza o la ubicación de un problema de rendimiento relacionado con el software al resaltar dónde una aplicación puede fallar o retrasarse.

##### Tipos de pruebas de rendimiento
Hay dos métodos principales de prueba de rendimiento: pruebas de carga y pruebas de estrés . Sin embargo, existen otros tipos de métodos de prueba que los desarrolladores pueden usar para determinar el rendimiento.

###### Las pruebas de carga
Ayudan a los desarrolladores a comprender el comportamiento de un sistema bajo un valor de carga específico. Un equipo puede incluir pruebas de carga como parte de un proceso de integración continua (CI), en el que prueban inmediatamente los cambios en una base de código mediante el uso de herramientas de automatización, como Jenkins.

###### Las pruebas de estrés
Colocan un sistema bajo cargas de tráfico superiores a las esperadas para que los desarrolladores puedan ver qué tan bien funciona el sistema por encima de sus límites de capacidad esperados. Las pruebas de estrés pueden ocurrir antes o después de que un sistema entre en funcionamiento.

###### La prueba de remojo o resistencia
Simula un aumento constante de usuarios finales a lo largo del tiempo para probar la sostenibilidad a largo plazo de los sistemas.

###### Las pruebas de picos
Otro subconjunto de las pruebas de estrés, evalúan el rendimiento de un sistema ante un aumento repentino y significativo de usuarios finales simulados.

###### Las pruebas de escalabilidad
Miden el rendimiento en función de la capacidad del software para escalar hacia arriba o hacia abajo los atributos de medición del rendimiento.

###### Las pruebas de capacidad
Analizan si una aplicación de software o un entorno pueden manejar la cantidad de tráfico para el que fue diseñado específicamente.


#### DEPLOYMENT
Aqui escribre una descripción con imagen Alain

### Código
Aqui pondra el codigo alvaro

## Análisis con SonarQube
Aqui pondra imagen alvaro

## Refactoring code
### Bad smells in code
Aqui coloca bad smell alvaro

### Duplicate code
Aqui coloca bad smell alvaro

# Casos de Prueba
Los casos de prueba son los escenarios que se utilizan para medir la funcionalidad de la aplicación a través de un conjunto de ciertas acciones o condiciones para verificar los resultados esperados. En otras palabras, un caso de prueba es un conjunto de acciones ejecutadas para autenticar la funcionalidad de su aplicación de software. 

Un caso de prueba consta de varias cosas, como pasos de prueba, datos de prueba y condiciones previas y posteriores desarrolladas para un escenario de prueba particular. Los casos de prueba se pueden aplicar a cualquier aplicación de software. Se puede hacer a través de pruebas manuales y automatizadas o cualquier herramienta de gestión de pruebas. 

Hay varios tipos diferentes de casos de prueba.

	1. Caso de prueba de funcionalidad – Los casos de prueba de funcionalidad, como su nombre indica, se utilizan para analizar si el sistema está funcionando como se esperaba o no. El equipo de control de calidad es responsable de escribir los casos de prueba funcionales. Este tipo de prueba se puede realizar tan pronto como el equipo de desarrollo haga que la primera función de la aplicación esté disponible para la prueba. Por ejemplo, verificar si el usuario puede subir una foto de perfil. 
	2. Caso de prueba de integración – Los casos de prueba de integración se utilizan para analizar si los diferentes módulos de la aplicación interactúan entre sí correctamente o no. El equipo de pruebas es responsable de separar las áreas que deben someterse a pruebas de integración. Por otro lado, el equipo de desarrollo ayuda a escribir los casos de prueba de integración. Por ejemplo, verificar si la página de inicio de sesión aparece cuando hacemos clic en el botón 'iniciar sesión' en la página de inicio. 
	3. Caso de prueba de usabilidad – Los casos de prueba de usabilidad, también conocidos como tareas o escenarios, son casos en los que los probadores presentan escenarios de alto nivel o tareas para completar en lugar de instrucciones paso a paso para realizar la prueba. Estos casos de prueba se utilizan para analizar cómo los usuarios suelen abordar y utilizar una aplicación. Por ejemplo, verificar si el usuario puede agregar más de un artículo a su carrito de compras en un sitio web de compras en línea y cómo es esa experiencia.

Algunos consejos que debe tener en cuenta al escribir un caso de prueba incluyen:

+ Escribir en un lenguaje fácil, comprensible y completo.
+ Su caso de prueba debe resonar con la perspectiva del usuario
+ Asigne una ID única a cada caso de prueba. Ayudará con una trazabilidad eficiente
+ Los requisitos previos deben citarse de manera adecuada y clara. 
+ Los datos de prueba deben definirse correctamente para evaluar las áreas funcionales.
+ Asegúrese de que los resultados esperados se indiquen claramente
+ Los pasos de prueba también deben enumerarse claramente 
+ Debe asegurarse de proporcionar los detalles adecuados sobre el entorno necesario para ejecutar la prueba.
+ Consulte con algunas personas mayores y compañeros para revisar los casos de prueba que escribe y reconozca también sus opiniones.

## **Ejecución de Test Unitarios*
## **Pruebas de Performance con Jmeter**
Aqui escribre una descripción con imagen Albert 
## **Pruebas funcionales con Selenium**
Aqui escribre una descripción con imagen Albert 

## **Pruebas de seguridad con OWASP**
### ¿Qué es OWASP (Open Web Application Security Project)?
El Open Web Application Security Project (OWASP) está dedicado a la búsqueda y la lucha contra las vulnerabilidades en el software. La OWASP Foundation es una organización sin ánimo de lucro que proporciona la infraestructura y apoya a este trabajo.
- La participación es gratuita y abierta para todos
- Aquí todo es gratuito y de código abierto
- Objetivos: crear herramientas, documentación y estándares relacionados con la seguridad en aplicaciones

