# ProyectoFinal-CI-CD
El proyecto es una tienda que vende todo tipo de articulos, la tienda tiene un carrito incluido, y permite agregar productos, se pueden ver facilmente las vistas colocando npm install, seguido de npm run dev e ir al localhost 3000.

## Pipeline
![WhatsApp Image 2022-12-29 at 7 07 39 PM](https://user-images.githubusercontent.com/22668239/210022707-b26bc8b3-6e2a-4649-a711-6097e9e5a215.jpeg)
### Fases:

#### ANALYSIS
Se usó la herramienta SONARQUBE para el análisis estático del codigo


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

![WhatsApp Image 2022-12-29 at 6 36 31 PM](https://user-images.githubusercontent.com/22668239/210022254-d52596de-f8ea-476c-9958-6462493d14b1.jpeg)


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

## Análisis con SonarQube
![sonar](https://user-images.githubusercontent.com/22668239/210022213-b1dfb852-a22d-4603-a118-102c5c5129d8.jpeg)

## Refactoring code
### Bad smells in code
![WhatsApp Image 2022-12-29 at 6 41 23 PM](https://user-images.githubusercontent.com/22668239/210022228-f3bb33b7-47e2-4b1b-bc1d-e54e5cd671c9.jpeg)

## **Pruebas de Performance con Jmeter**
También conocido como 'Apache JMeter', es una aplicación de código abierto - Java con una interfaz
gráfica. Está diseñado para analizar y medir el rendimiento y el comportamiento de carga funcional de aplicaciones
web y una variedad de servicios.

Características: JMeter soporta varios enfoques de pruebas no funcionales, como pruebas de carga, pruebas de
estrés, pruebas de volumen, pruebas de resistencia, pruebas distribuidas, pruebas de servicios web, etc. También
proporciona soporte para protocolos como:
- Web Services - SOAP / XML-RPC
- Web - HTTP, HTTPS sites 'web 1.0' web 2.0 (ajax, flex and flex-ws-amf)
- Database via JDBC drivers
- Directory - LDAP
- Messaging oriented service via JMS
- Service - POP3, IMAP, SMTP

Funcionamiento: JMeter simula un grupo de usuarios virtuales (threads-hilos) y los usa para enviar solicitudes
(requests) en el servidor de destino. También recopila cada respuesta proveniente del servidor en forma de tablas,
gráficos, árbol de resultados, etc.


![WhatsApp Image 2022-12-29 at 7 10 16 PM](https://user-images.githubusercontent.com/22668239/210022835-0faa315a-b71c-4e25-9af3-0cea9a309429.jpeg)



## **Pruebas funcionales con Selenium**
Selenium es un conjunto de utilidades que facilita la labor de obtener juegos de pruebas para aplicaciones web. Para ello nos permite grabar, editar y depurar casos de prueba, que podrán ser ejecutados de forma automática e iterativa posteriormente.

Además de ser una herramienta para registrar acciones, permite editarlas manualmente o crearlas desde cero. Las acciones se basan en el uso de diferentes API's en diferentes lenguajes (PHP, Ruby, JAVA, Javascript, etc). Entre su principales características podemos nombrar:

- Facilidad de registro y ejecución de los test.
- Referencia a objetos DOM en base al ID, nombre o a través de XPath.
- Auto-completado para todos los comandos.
- Las acciones pueden ser ejecutadas paso a paso.
- Herramientas de depuración y puntos de ruptura (breakpoints).
- Los test pueden ser almacenados en diferentes formatos.
 
El potencial de esta herramienta puede ser utilizado para la grabación de las pruebas funcionales durante la Generación de pruebas de regresión. Con este servicio se consigue obtener una batería de pruebas automatizadas que podrán ser utilizadas cuando sea necesario repetir las pruebas.

![WhatsApp Image 2022-12-29 at 6 37 31 PM](https://user-images.githubusercontent.com/22668239/210022267-2c8b97f0-ef3b-4b8c-87e8-beb8d3631e78.jpeg)


## **Pruebas de seguridad con OWASP**
### ¿Qué es OWASP (Open Web Application Security Project)?
El Open Web Application Security Project (OWASP) está dedicado a la búsqueda y la lucha contra las vulnerabilidades en el software. La OWASP Foundation es una organización sin ánimo de lucro que proporciona la infraestructura y apoya a este trabajo.
- La participación es gratuita y abierta para todos
- Aquí todo es gratuito y de código abierto
- Objetivos: crear herramientas, documentación y estándares relacionados con la seguridad en aplicaciones

![WhatsApp Image 2022-12-29 at 6 33 05 PM](https://user-images.githubusercontent.com/22668239/210022295-93ed2085-93e7-41de-8be6-8f0e7a600c51.jpeg)


## Gestion de issues con Trello

Trello es una herramienta visual que permite a los equipos gestionar cualquier tipo de proyecto y flujo de trabajo, así como supervisar tareas. Añade archivos, checklists o incluso automatizaciones: personalízalo todo según las necesidades de tu equipo. Solo tienes que registrarte, crear un tablero y ¡listo!