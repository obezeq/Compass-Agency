# COMPASS AGENCY

¡Bienvenido a COMPASS AGENCY! En un mundo donde la primera impresión cuenta, hemos creado una web que no solo destaca, sino que también refleja la esencia y la visión de tu agencia de marketing digital. A continuación, te presentamos las características y beneficios de esta innovadora plataforma, ideal para captar la atención  de los usarios de la forma más sencilla y impactante.

---
## 🚀 ¿Por qué esta web es la ideal para captar usuarios?

### 1. **Diseño Moderno y Atractivo**
La web ha sido diseñada con HTML5 y CSS3, asegurando un aspecto fresco y contemporáneo. Cada elemento ha sido cuidadosamente pensado para captar la atención de tus visitantes y convertirlos en clientes potenciales.

### 2. **Animaciones Impactantes**
Gracias a la integración de GSAP (libreria de javascript), hemos añadido animaciones CSS3 que no solo embellecen la experiencia del usuario, sino que también guían la atención hacia los elementos clave de tu contenido de una forma que impacte en la memoria del usuario y deje una huella especial y buena imagen cuando visite la web.

### 3. **Efecto Parallax**
La implementación del efecto parallax proporciona una profundidad visual que hace que la navegación sea más envolvente. Este efecto no solo es estéticamente agradable, sino que también mejora la usabilidad de la web, y experiencia del usuario en la página web que impactará en la primera imagen que tendran los clientes sobre la agencia, siendo así positiva y impactante. 

### 4. **Modo Oscuro y Claro**
Con la creciente popularidad del modo oscuro, hemos implementado una estructura que permite a los usuarios alternar entre el modo claro y oscuro. Esto no solo mejora la experiencia del usuario, sino que también muestra que COMPASS AGENCY está a la vanguardia de las tendencias digitales.

### 5. **Código Limpio y Eficiente**
El código ha sido desarrollado con las mejores prácticas en mente, asegurando que sea fácil de mantener y escalar. Esto significa que tu equipo podrá realizar actualizaciones y modificaciones sin complicaciones, haciendo que el mantenimiento sea flexible y sencillo de realizar.

## 🌟 Beneficios para COMPASS AGENCY

- **Aumenta la Credibilidad**: Una web bien diseñada transmite profesionalismo y confianza, lo que es crucial para atraer nuevos clientes.
- **Mejora la Experiencia del Usuario**: Con un diseño intuitivo y animaciones fluidas, los visitantes disfrutarán de una navegación sin fricciones.
- **Optimización para SEO**: La estructura de la web está optimizada para motores de búsqueda, lo que ayudará a mejorar la visibilidad de COMPASS AGENCY en línea. Y posibilidad de desarrollar un blog de forma sencilla para la creación de artículos que incrementen el SEO y expandan la visibilidad de la agencia a todos los usuarios del mundo con una simple búsqueda.
- **Adaptabilidad Responsive**: La web es completamente responsiva, lo que significa que se verá increíble en cualquier dispositivo, desde móviles hasta pantallas grandes.

---

## **Análisis de la Estructura de HTML de COMPASS AGENCY**

### **1. Header (Encabezado)**

```html
<header class="header">
    ...
</header>
```

**Justificación:**
- **`<header>`**: Se utiliza para englobar los elementos que conforman el encabezado principal del sitio, proporcionando una estructura clara y semántica. Esto es fundamental para la accesibilidad y la comprensión del documento tanto para usuarios como para motores de búsqueda.
- **Título**: Dentro del `<header>`, el `<h1>` con la clase `header__title` encapsula el nombre de la agencia, "COMPASS", lo que es crucial para la jerarquía de contenido y el SEO. Además, el enlace dentro del título (`<a href="/">COMPASS</a>`) hace que el nombre sea clicable, dirigiendo a los usuarios a la página principal.
- **Navegación**: El menú de navegación está correctamente ubicado dentro de un `<nav>`, usando un `<ul>` con enlaces (`<a>`) semánticamente estructurados en una lista (`<li>`). Esto ayuda tanto a los usuarios como a los motores de búsqueda a identificar claramente las secciones clave del sitio.

**Buenas Prácticas Aplicadas:**
- **Uso adecuado de `aria-hidden`** para mejorar la accesibilidad del menú.
- **Etiqueta semántica de enlace** con `<a>` para la navegación.
- **Diseño adaptable** con un menú tipo "burger" para pantallas pequeñas.

---

### **2. Main (Cuerpo Principal)**

```html
<main>
    ...
</main>
```

**Justificación:**
- **`<main>`**: Elemento semántico que define el contenido principal del documento, esencial para separar la información primaria de los elementos de navegación y pie de página, mejorando tanto la accesibilidad como el SEO.

Dentro de este bloque, se encuentran dos secciones claves:

#### **2.1. Presentación**
```html
<section class="presentation">
    ...
</section>
```
**Justificación:**
- **`<section>`**: Define una parte del contenido principal con un tema específico, en este caso, la presentación de la agencia. Dentro de esta sección, se encuentran los títulos `<h3>`, `<h1>`, y `<h2>`, que son fundamentales para organizar la jerarquía del contenido y mejorar la legibilidad tanto para los usuarios como para los motores de búsqueda.

#### **2.2. Servicios**
```html
<section class="home__services">
    ...
</section>
```
**Justificación:**
- **`<section>`**: Aquí se agrupan los servicios que ofrece la agencia, permitiendo que los usuarios naveguen fácilmente a través de cada uno de ellos. Cada servicio está encapsulado en un `<article>`, lo que ayuda a dividir cada oferta de forma clara y estructurada.
- **`<article>`**: Ideal para contenido independiente, como un servicio, que podría ser distribuido o sindicado, lo que también mejora la accesibilidad y el SEO.
- **Enlaces de "Learn more"**: Se utilizan enlaces bien estructurados para que los usuarios exploren más sobre cada servicio, con un diseño claro y funcional.

**Buenas Prácticas Aplicadas:**
- **Uso de títulos `h3` para los nombres de los servicios**, facilitando la comprensión de la jerarquía del contenido.
- **Enlaces claros** que promueven la navegación y mejoran la experiencia del usuario.

---

### **3. Footer (Pie de Página)**

```html
<footer class="footer">
    ...
</footer>
```

**Justificación:**
- **`<footer>`**: Utilizado correctamente para contener información de pie de página, como derechos de autor y enlaces importantes. Esto mejora la navegación del usuario y la accesibilidad.
- **Enlaces de navegación en el footer**: Como parte de la experiencia de usuario, el pie de página ofrece enlaces secundarios a otras secciones del sitio, ayudando a mantener una estructura organizada y accesible.
- **Enlace "Back to top"**: Mejora la accesibilidad y la facilidad de navegación al permitir que los usuarios vuelvan rápidamente a la parte superior de la página.

---

## **Ventajas de usar CSS3 + Metodología BEM junto con HTML5**

#### **1. **CSS3**: Ventajas**
CSS3 es la última versión del lenguaje de estilo utilizado en la web. Al emplearlo, obtienes los siguientes beneficios:

- **Mayor control sobre el diseño**: CSS3 permite un control más avanzado sobre el diseño web, ofreciendo propiedades como *transiciones*, *animaciones*, *sombras*, *gradientes* y *flexbox*, lo que mejora la interactividad y la estética del sitio sin depender de JavaScript.
- **Compatibilidad con dispositivos móviles**: Con *media queries* en CSS3, puedes crear diseños **responsive**, adaptando la página a diferentes tamaños de pantalla (móviles, tablets, escritorios).
- **Mejor rendimiento**: Al reemplazar imágenes estáticas con *gradientes* o *sombras* CSS, se reduce el número de solicitudes HTTP, lo que mejora la carga de la página.
- **Transparencias y efectos visuales**: Las transiciones y transformaciones son ahora más fáciles de implementar, permitiendo una experiencia de usuario más dinámica y atractiva.

#### **2. **Metodología BEM**: Ventajas**
BEM (Block, Element, Modifier) es un enfoque modular para escribir CSS que ayuda a mantener el código limpio y escalable.

- **Escalabilidad y mantenimiento**: BEM promueve la reutilización de código, ya que las clases CSS son independientes y no tienen dependencias con otras partes del código. Esto es ideal para proyectos grandes y en constante crecimiento, como un sitio web corporativo.
- **Mejor comprensión**: El uso de un sistema claro de nomenclatura hace que el código CSS sea fácil de entender para otros desarrolladores, mejorando la colaboración dentro del equipo.
- **Modularidad**: Al utilizar bloques, elementos y modificadores, puedes modificar partes del diseño sin afectar a otras, lo que da mucha flexibilidad y facilidad de mantenimiento.
- **Predecibilidad**: Los nombres de las clases siguen un patrón lógico que facilita la identificación de qué clase controla qué parte del diseño, lo que reduce la probabilidad de errores al hacer cambios.

---

### **HTML5 vs. HTML4: ¿Por qué HTML5 es superior?**

HTML5 es una actualización importante respecto a su predecesor, HTML4, y tiene claras ventajas en términos de accesibilidad, semántica y funcionalidad.

#### **1. Mejor Semántica**
- **Etiquetas semánticas**: HTML5 introdujo etiquetas semánticas como `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`, entre otras, que mejoran la organización y comprensión del contenido. Esto beneficia tanto a los usuarios como a los motores de búsqueda, mejorando el SEO.
- **Mejor accesibilidad**: Con las etiquetas semánticas, es mucho más fácil para las personas con discapacidades navegar por un sitio. Los lectores de pantalla pueden identificar correctamente las secciones, mejorando la experiencia de usuario.

#### **2. Funcionalidades Integradas**
- **Soporte multimedia**: HTML5 incluye etiquetas para incrustar contenido multimedia como `<audio>` y `<video>`, eliminando la necesidad de plugins externos como Flash.
- **Almacenamiento local**: Gracias a APIs como *localStorage* y *sessionStorage*, HTML5 permite almacenar datos en el navegador, lo que optimiza la experiencia offline y reduce la carga del servidor.
- **Geolocalización**: HTML5 permite acceder a la ubicación geográfica del usuario, lo que abre la puerta a nuevas funcionalidades como mapas interactivos, localización en tiempo real y más.

#### **3. Optimización y rendimiento**
- **Menos dependencias**: A diferencia de HTML4, que necesitaba complementos como Flash, HTML5 no depende de plugins adicionales, lo que mejora la velocidad de carga de la página.
- **Mejor soporte para dispositivos móviles**: HTML5 fue diseñado con la compatibilidad móvil en mente, lo que permite crear sitios web adaptables a diferentes tamaños de pantalla sin perder calidad.

---

### **HTML5 vs Otros Lenguajes de Marca**

Además de HTML, existen otros lenguajes de marca como **XML**, **XHTML**, **SVG**, entre otros. Sin embargo, HTML5 tiene varias ventajas que lo posicionan como el lenguaje de referencia para el desarrollo web moderno.

#### **1. HTML5 vs. XHTML**
- **Simplicidad**: HTML5 es mucho más flexible que XHTML, ya que no requiere una sintaxis estricta (por ejemplo, no es necesario cerrar todas las etiquetas, aunque es recomendable hacerlo). XHTML es más estricto y debe seguir reglas más rígidas, lo que puede ser un desafío durante el desarrollo.
- **Compatibilidad con HTML**: HTML5 es retrocompatible con HTML4, lo que significa que puedes utilizar código HTML4 en un documento HTML5 sin problemas. En cambio, XHTML no siempre es compatible con los navegadores modernos si no se escribe correctamente.
- **Mejor integración con JavaScript**: HTML5 tiene una mejor integración con JavaScript, lo que facilita la creación de aplicaciones interactivas y dinámicas. Esto es fundamental para el desarrollo de sitios web modernos con interactividad avanzada.

#### **2. HTML5 vs XML**
- **Facilidad de uso**: Mientras que XML es un lenguaje de marcado de propósito general, HTML5 está específicamente diseñado para crear páginas web. HTML5 está optimizado para la representación de contenido visual, mientras que XML está más orientado al almacenamiento y transporte de datos.
- **Compatibilidad y rendimiento**: HTML5 está mejor soportado por los navegadores y tiene un rendimiento superior en la renderización de contenido visual, mientras que XML se utiliza más para bases de datos y servicios web.

#### **3. HTML5 vs SVG**
- **Propósito diferente**: HTML5 está orientado al contenido web general, mientras que SVG (Scalable Vector Graphics) es específicamente para gráficos vectoriales en la web. Si bien ambos son complementarios (puedes usar SVG dentro de un documento HTML5), HTML5 abarca una mayor variedad de contenido y funcionalidades.

---

## VALIDACIÓN W3C

### VALIDACIÓN W3C HTML5

#### ERROR 1

**Código con error** (index.html)
```html
<h3 class="presentation__topsubtitle lastik">The madaf*cking</h2>
```

![W3C VALIDATOR ERROR](https://raw.githubusercontent.com/obezeq/Compass-Agency/refs/heads/main/img/w3c-html-validator-error-1.png)

**Código solucionado** (index.html)
```html
<h3 class="presentation__topsubtitle lastik">The madaf*cking</h3>
```

El error era simplemente un despiste, lo he solucionado simplemente poniendo la etiqueta de forma correcta.

#### ERROR 2

**Código con error** (index.html)
```html
<h1 class="footer__logo">
    <a href="." class="footer__logo-link">COMPASS AGENCY</a>
    <p class="footer__copyright">&copy; 2025 COMPASS AGENCY. All rights reserved.</p>
</h1>
```

![W3C VALIDATOR ERROR](https://raw.githubusercontent.com/obezeq/Compass-Agency/refs/heads/main/img/w3c-html-validator-error-2.png)

**Código solucionado** (index.html)
```html
<div class="footer__logo">
    <h1><a href="." class="footer__logo-link">COMPASS AGENCY</a></h1>
    <p class="footer__copyright">&copy; 2025 COMPASS AGENCY. All rights reserved.</p>
</div>
```

Para solucionarlo simplemente he sustituido el "h1" por un "div" pues el "div" me sirve como una especie de container para el logo del footer, el cual incluirá un "h1", adentro con el enlace "a", y luego un "p" donde ya contendrá el copyright.

---

### VALIDACIÓN W3C - CSS3

**Código con error:**
```css
.home__services {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    padding: 0vh 0 13vh 0;
    background-color: var(--primary-color);
}
```

![W3C VALIDATOR ERROR](https://raw.githubusercontent.com/obezeq/Compass-Agency/refs/heads/main/img/w3c-css-validator-error.png)

(error en "align-items: space-between;")

**Código corregido:**
```css
.home__services {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0vh 0 13vh 0;
    background-color: var(--primary-color);
}
```

![W3C VALIDATOR SOLUCION](https://raw.githubusercontent.com/obezeq/Compass-Agency/refs/heads/main/img/w3c-css-validator-solucion.png)

**Explicación del error:**  
El error ocurría porque `space-between` **no es un valor válido** para la propiedad `align-items` en CSS. Esta propiedad solo acepta valores como:
- `flex-start` (alineación al inicio del eje transversal),
- `flex-end` (alineación al final del eje transversal),
- `center` (centrado),
- `baseline` (alineación por línea base),
- `stretch` (estirar para llenar el espacio).

**¿Cómo lo he podido solucionar?**  
1. **He revisado que es una propiedad incorrecta:** la he remplazado `align-items: space-between;` por un valor válido como `center`, que centra los elementos horizontalmente (ya que `flex-direction: column` define el eje transversal como horizontal).
2. **Aclaración sobre `space-between`:** Si el objetivo era distribuir los elementos con espacio entre ellos, esto se logra con `justify-content: space-between` (para el eje principal). Sin embargo, en el código original, `justify-content` estaba configurado como `center`, por lo que se asumió que la intención no era usar `space-between` en el eje principal. Si ese fuera el caso, habría que ajustar `justify-content` en lugar de `align-items`.

---

Aquí tienes la documentación para la **Parte 1: Uso de JavaScript (ES6)**, explicada de forma extensa y en primera persona:

---

## Uso de JavaScript (ES6)

En esta fase del proyecto he aprovechado al máximo las características modernas de ECMAScript 6 (ES6) para escribir un código claro, eficiente y fácil de mantener. A continuación, detallo cada aspecto importante y cómo lo he implementado en mi código.

### Declaración de Variables con `let` y `const`

He utilizado `const` para declarar aquellas variables cuyos valores no deben cambiar durante la ejecución, garantizando que la referencia permanezca inmutable. Por otro lado, `let` lo uso para variables que necesito actualizar, como contadores o estados temporales.

Por ejemplo, en la función `handleBookMeeting`:
```js
'use strict';

const handleBookMeeting = () => {
    let bookDate;
    do {
        bookDate = prompt("Introduce the day of the meeting (YYYY-MM-DD):");
    } while (!/^\d{4}-\d{2}-\d{2}$/.test(bookDate));

    alert(`The meeting is booked on ${bookDate}`);
};
```
Aquí, `bookDate` se declara con `let` porque su valor se actualiza dentro del bucle `do...while` hasta que se cumpla la condición. Esto me permite asegurar que el dato final cumpla con el formato deseado sin necesidad de sobrescribir una constante.

### Arrow Functions

Las arrow functions me han permitido definir funciones de forma concisa, eliminando la necesidad de la palabra clave `function` y, además, preservan el contexto de `this` de forma natural. Esto es especialmente útil en el manejo de eventos y en funciones de callback.

Un ejemplo claro es la función para actualizar el valor del presupuesto:
```js
const updateBudgetDisplay = (value) => {
    budgetValue.textContent = `$${parseInt(value).toLocaleString()}`;
};
```
La sintaxis de la arrow function hace que el código sea más legible y compacto, ayudándome a centrarme en la lógica del problema en lugar de en la sintaxis.

### Template Literals

Los template literals (cadenas literales) son una herramienta poderosa que he utilizado para construir cadenas de texto dinámicamente. Al usar comillas invertidas (`` ` ``), puedo interpolar variables y expresiones de manera directa y limpia, lo que facilita la generación de mensajes o contenidos dinámicos.

Por ejemplo, en el mensaje de confirmación de la reunión:
```js
alert(`The meeting is booked on ${bookDate}`);
```
Esto resulta mucho más legible que concatenar cadenas con el operador `+` y me permite incluir variables dentro del mensaje de forma directa.

### Desestructuración

La desestructuración es una técnica que he empleado para extraer valores de objetos y arrays de manera directa. En mi código, la utilizo en la función que maneja el envío del formulario para acceder a los elementos del formulario de forma sencilla.

Por ejemplo:
```js
const initializeFormHandler = () => {
    const form = document.querySelector(".contact__form--form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Extraigo los elementos del formulario directamente
        const { name, message } = form.elements;

        if (name.value.trim() === "" || message.value.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Resto del código para manipular el DOM y añadir un nuevo mensaje
    });
};
```
Mediante la desestructuración, evito tener que llamar a `document.getElementById` o acceder manualmente a cada propiedad, lo que hace el código más compacto y fácil de entender.

### Buenas Prácticas y Estructuración del Código

- **'use strict':**  
  Incluir `"use strict";` al inicio de mi archivo me ayuda a escribir un código más seguro y a evitar errores comunes al trabajar con JavaScript.

- **Modularidad:**  
  He dividido la funcionalidad en funciones específicas (por ejemplo, `handleBookMeeting`, `initializeFormHandler`, etc.), lo que me permite organizar el código por responsabilidades. Cada función se encarga de una tarea concreta, lo que facilita tanto la lectura como el mantenimiento.

- **Legibilidad y Comentarios:**  
  A lo largo del código he añadido comentarios explicativos en cada sección clave. Esto no solo me ayuda a mí a recordar el propósito de cada bloque, sino que también facilita la comprensión a otros desarrolladores o evaluadores.

- **Consistencia en el estilo:**  
  He seguido un estilo consistente (indentación, nombres de funciones en camelCase, etc.) que es fundamental para mantener el código limpio y profesional.

### Ejemplo Completo de Uso de ES6 en una Función

Aquí muestro un ejemplo consolidado que combina varias de estas características:
```js
'use strict';

const handleBookMeeting = () => {
    let bookDate;
    do {
        bookDate = prompt("Introduce the day of the meeting (YYYY-MM-DD):");
    } while (!/^\d{4}-\d{2}-\d{2}$/.test(bookDate));

    alert(`The meeting is booked on ${bookDate}`);
};

document.addEventListener("DOMContentLoaded", () => {
    const bookMeetingButton = document.getElementById("bookMeeting");
    bookMeetingButton.addEventListener("click", handleBookMeeting);
});
```
En este fragmento, utilizo:
- **Constantes y variables con `const` y `let`** para gestionar el flujo de datos.
- **Arrow function** para definir `handleBookMeeting` de forma concisa.
- **Template literal** para formar el mensaje del `alert`.
- **Manejo de eventos** con `addEventListener` y la utilización del evento `DOMContentLoaded` para asegurar que el DOM esté completamente cargado.

---

## 2. Manipulación del DOM

He utilizado diversas tecnicas para manipular el DOM de forma dinámica y responder a las interacciones del usuario. A continuación, describo cada handler implementado, explicando su funcionamiento y por que tome cada decision.

### 2.1. **initializeQuoteManager()**

Esta función se encarga de gestionar la visibilidad de una cita y el texto del botón asociado. Su funcionamiento se basa en:

- **Selección de elementos:**  
  Utilizo `document.getElementById` para acceder a la cita (`#quote`) y al botón (`#quoteButton`).

- **Gestión del estado:**  
  Creo una variable booleana (`isQuoteVisible`) para llevar el control de si la cita se muestra o no.

- **Manejo de eventos:**  
  Mediante `addEventListener` asigno un handler al botón que, al hacer clic, ejecuta la lógica para alternar la visibilidad. Se utiliza `event.preventDefault()` para evitar comportamientos por defecto en el enlace.

- **Modificación del DOM:**  
  Dependiendo del estado, se cambia la propiedad `style.display` de la cita y se actualiza el contenido textual del botón utilizando el operador ternario.

#### Código:
```js
const initializeQuoteManager = () => {
    const quote = document.getElementById("quote");
    const quoteButton = document.getElementById("quoteButton");

    let isQuoteVisible = true;

    quoteButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evito la navegación por defecto del <a>
        quote.style.display = isQuoteVisible ? "none" : "block"; // Alterno la visibilidad
        quoteButton.textContent = isQuoteVisible ? "Show Quote" : "Hide Quote"; // Actualizo el texto del botón
        isQuoteVisible = !isQuoteVisible; // Cambio el estado
    });
};
```

### 2.2. **initializeBudgetSlider()**

Esta función permite actualizar dinámicamente el valor mostrado de un presupuesto basado en la interacción del usuario con un control deslizante (`input type="range"`). Aquí se destacan los siguientes aspectos:

- **Selección de elementos:**  
  Accedo al input del presupuesto y al elemento donde se muestra el valor (`#budget-value`).

- **Actualización en tiempo real:**  
  Defino una función llamada `updateBudgetDisplay` (implementada como arrow function) que actualiza el contenido textual del `<span>` formateando el número con separadores de miles.

- **Manejo de eventos:**  
  Con `addEventListener` escucho el evento `input` para que cada vez que el usuario cambie el valor del slider, se actualice la visualización.

#### Código:
```js
const initializeBudgetSlider = () => {
    const budgetInput = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    // Función que actualiza la visualización del presupuesto
    const updateBudgetDisplay = (value) => {
        budgetValue.textContent = `$${parseInt(value).toLocaleString()}`;
    };

    // Inicializo la visualización con el valor actual del input
    updateBudgetDisplay(budgetInput.value);

    // Escucho el evento input para actualizar el valor en tiempo real
    budgetInput.addEventListener("input", (event) => {
        updateBudgetDisplay(event.target.value);
    });
};
```

### 2.3. **initializeBookMeeting()**

Esta función se encarga de gestionar la reserva de una reunión. Su lógica se centra en:

- **Selección de elementos:**  
  Se selecciona el botón destinado a reservar la reunión mediante `document.getElementById`.

- **Manejo de eventos:**  
  Asigno un listener para el evento `click` que ejecuta la función `handleBookMeeting`.  
  La función `handleBookMeeting` utiliza un bucle `do...while` para validar que el usuario ingrese una fecha en formato `YYYY-MM-DD`, y posteriormente muestra un `alert` confirmando la reserva.

#### Código:
```js
const initializeBookMeeting = () => {
    const bookMeetingButton = document.getElementById("bookMeeting");
    bookMeetingButton.addEventListener("click", handleBookMeeting);
};
```

La función `handleBookMeeting` (ya explicada en la parte 1) se encarga de:
- Pedir al usuario la fecha mediante `prompt`.
- Validar el formato con una expresión regular.
- Mostrar un mensaje de confirmación.

### 2.4. **initializeFormHandler()**

Esta función gestiona el envío del formulario de contacto y la creación dinámica de nuevos elementos en la lista de contacto. Se abordan varios aspectos críticos:

- **Selección de elementos:**  
  Utilizo `document.querySelector` para obtener el formulario y la lista donde se agregarán los nuevos mensajes.

- **Prevención del comportamiento por defecto:**  
  Con `event.preventDefault()` impido que el formulario se envíe de forma tradicional, lo que evita recargar la página.

- **Validación de entrada:**  
  Utilizo la desestructuración para extraer directamente los elementos del formulario (`name` y `message`). Valido que ambos campos no estén vacíos.

- **Creación de nuevos elementos:**  
  Mediante `document.createElement` creo un nuevo `<li>` y dos `<span>` (uno para el ícono y otro para el mensaje). Uso `appendChild` para construir la estructura y finalmente agrego el nuevo `<li>` a la lista de contactos.

- **Limpieza del formulario:**  
  Después de agregar el nuevo mensaje, se restablece el formulario con `form.reset()`.

#### Código:
```js
const initializeFormHandler = () => {
    const form = document.querySelector(".contact__form--form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Desestructuro los elementos del formulario para acceder a name y message
        const { name, message } = form.elements;

        if (name.value.trim() === "" || message.value.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Creo un nuevo elemento de lista para mostrar el mensaje de contacto
        const list = document.querySelector(".contact__info--list");
        const newItem = document.createElement("li");
        newItem.classList.add("contact__info--item");

        const icon = document.createElement("span");
        icon.classList.add("fa-solid", "fa-user");

        const text = document.createElement("span");
        text.textContent = `${name.value}: ${message.value}`;

        // Agrego el ícono y el texto al nuevo <li>
        newItem.appendChild(icon);
        newItem.appendChild(text);

        // Inserto el nuevo <li> en la lista de contactos
        list.appendChild(newItem);

        // Limpio el formulario y notificar al usuario
        form.reset();
        alert("Contacted");
    });
};
```

---

## 3. Funcionalidades Interactivas

En esta fase, he implementado cuantro funcionalidades clave que mejoran la interacción del usuario entre ella nos encontramos con: **galería dinámica**, **validación de formulario en tiempo real**, **sistema de filtrado de reseñas** y **flujo libre del proyecto (asignación servicios interesados mientras el usuario interactua por la página)**. A continuación, detallo cada una:

---

### 3.1. Galería Interactiva (Drag & Drop + Lightbox)
La galería permite subir imágenes arrastrándolas o seleccionándolas, eliminarlas y reorganizarlas. También incluye un lightbox para visualización ampliada.

#### **Creación y Eliminación Dinámica de Elementos**

Añadir imagen (`gallery.js`)
```js
const addImageToGallery = (src) => {
  const listItem = document.createElement('li');
  listItem.className = 'gallery-list-item';
  listItem.draggable = true;
  listItem.innerHTML = `
    <figure class="gallery-figure">
      <img src="${src}" alt="Imagen subida" class="gallery-image">
      <button class="gallery-delete-btn">×</button>
    </figure>
  `;
  galleryList.appendChild(listItem); // Lo añado al DOM
};
```

Eliminar imagen (`gallery.js`)
```js
const deleteImage = (item) => {
  item.remove(); // Lo elimino del DOM
  updateImageArray();
};
```

#### **Eventos de Arrastrar y Soltar**

Drag & Drop (`gallery.js`)
```js
item.addEventListener('dragstart', handleDragStart);
galleryList.addEventListener('dragover', handleDragOver);

const handleDragOver = (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(galleryList, e.clientY);
  galleryList.insertBefore(draggedItem, afterElement); // Aqui reorganizo los elementos
};
```

#### **Modificación de Estilos en Lightbox**
Lightbox (`gallery.js`)
```js
const openLightbox = () => {
  lightboxImage.style.transform = 'scale(1.1)'; // Logrando un efecto visual
  lightbox.showModal();
  document.body.style.overflow = 'hidden'; // Bloqueando asi el scroll
};
```

---

### 3.2. Formulario con Validación Dinámica

El formulario de contacto incluye validación en tiempo real y notificaciones visuales.

#### **Validación de Campos**

He validado ciertos campos así como, el nombre, el teléfono, el email, el mensaje y los servicios. Todas estas validaciones las compruebo desde initializeFormHandler(), especificamente en la funcion de adentro, validateForm(), donde uso destructuración.

En caso que haya un error se almacenan en un array errors, donde luego se desplegaran todos los errores en el siguiente paso para notificarlo.

En caso que no haya ningun error, como el array esta vacio, en el siguiente paso se notificara un mensaje de exito.

Despues de enviar todo el formulario, se resetan los campos y el localStorage, ademas se resetea tambien el valor del budget slider a como estaba antes.

**1. Validación del Nombre (`name`):**

- Verifico que la longitud del nombre sea entre 2 y 50 caracteres y que ademas tenga caracteres.
- Y luego verifico que el nombre sean caracteres validos.

```js
// VERIFICACIÓN DE CAMPO name DEL FORMULARIO
if (name.length < 2 || name.length > 50) {
    errors.push('The name should be within 2-50 valid characters');
}

for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (!(
    (char >= 'A' && char <= 'Z') ||
    (char >= 'a' && char <= 'z') ||
    (char >= 'À' && char <= 'ÿ') ||
    char === ' ' ||
    char === "'"
)) {
    errors.push('The name contain no valid characters');
    break;
    }
}
```

**2. Validación de email (`contact.js`)**

- Aquí lo que hago es primero me creo un array de todos los dominios de emails temporales para evitar que el usuario haga una submission del formulario con emails temporales / desechables.
- Posteriormente verifico que el email no contenga ningún espacio.
- Compruebo que el email sea válido (que contenga un '@' y un '.')

```js
// VALIDACIÓN DE EMAIL
const temporaryDomains = [
    'tempmail.com',
    '10minutemail.com',
    'mailinator.com',
    'guerrillamail.com',
    'yopmail.com',
    'throwawaymail.com',
    'getnada.com',
    'maildrop.cc',
    'sharklasers.com',
    'discard.email'
];        

if (email.includes(' ')) {
    errors.push("The email can't contain any spaces");
}

if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    errors.push('The email is not valid');
} else {
    const emailDomain = email.split('@')[1];

if (temporaryDomains.includes(emailDomain)) {
    errors.push("The email can't be a disposable email")
}
```

**3. Validación del Teléfono (`phone`):**
```js
// VERIFICACIÓN DEL TELEFONO MOVIL
if (phone.length < 7 || phone.length > 20) {
    errors.push('The phone number should be within 7-20 characters');
}
    
for (let i = 0; i < phone.length; i++) {
    const char = phone[i];
    if (!(
    (char >= '0' && char <= '9') ||
    char === ' ' ||
    char === '-' ||
    char === '(' ||
    char === ')' ||
    char === '+'
)) {
    errors.push('The phone number containts invalid characters');
    break;
    }
}
```

**4. Validación de Servicios (`services`):**
```js
// Aseguramos que seleccione al menos 1 servicio
if (services.length === 0) {
    errors.push('Debes seleccionar al menos un servicio');
}
```

**5. Validación del Mensaje (`message`):**
```js
// Sanitización y longitud del mensaje
const cleanMessage = sanitizeInput(message);
if (cleanMessage.length < 50 || cleanMessage.length > 5000) {
    errors.push('El mensaje debe tener 50-5000 caracteres');
}
```

**Uso de Desestructuración:**  
Para manejar los datos del formulario de forma más clara, utilizo desestructuración de objetos:

```js
const formData = {
    name: sanitizeInput(form.elements.name.value.trim()),
    email: form.elements.email.value.trim(),
    phone: form.elements.phone.value.trim(),
    message: sanitizeInput(form.elements.message.value.trim()),
    services: selectedServices,
    budget: form.elements.budget.value
};

// Desestructuración para acceder a las propiedades
const { name, email, phone, message, services } = formData;

// Uso en validaciones
validateForm({ name, email, phone, message, services });
```

**Gestión de Errores:**  
Todos los errores se almacenan en el array `errors`, y se muestran al usuario mediante notificaciones:

```js
if (validationErrors.length > 0) {
    validationErrors.forEach(error => {
        showNotification(error, false); // Muestra cada error
    });
    return; // Detiene el envío
}
```

Esta estructura permite una validación detallada manteniendo el código organizado y fácil de mantener. La desestructuración ayuda a trabajar con objetos complejos de forma más intuitiva.

#### **Notificaciones con Estilos Dinámicos**
```js
// Notificaciones (contact.js)
const showNotification = (message, isSuccess) => {
  notification.classList.add(isSuccess ? 'success' : 'error');
  notification.style.opacity = '1'; // Animación CSS
  setTimeout(() => notification.remove(), 3000);
};
```

---

### 3.3. Sistema de Filtrado de Reseñas

Implementé un sistema de filtrado dinámico que permite a los usuarios explorar reseñas por calificación. Aquí el desglose técnico:

#### **Lógica Central de Filtrado**
```javascript
const filterReviews = (rating) => {
  allReviews.forEach(review => {
    const starsElement = review.querySelector('.review__stars');
    const starCount = starsElement.textContent.trim().length;
    
    // Animación de transición suave
    review.style.transition = 'opacity 0.3s ease';
    
    if (rating === 'all' || starCount === parseInt(rating)) {
      review.style.display = 'block';
      setTimeout(() => review.style.opacity = '1', 10); // Retraso mínimo para trigger CSS
    } else {
      review.style.opacity = '0';
      setTimeout(() => review.style.display = 'none', 300); // Espera a que termine la animación
    }
  });
};
```

- **Cálculo de Estrellas:** Utilizo `textContent.length` para determinar la calificación de las estrellas.
- **Animación Fluida:** Combino las propiedades `opacity` y `display` con transiciones CSS para lograr una buena animacion.
- **Sincronización:** utilizo el `setTimeout` para coordinar cambios visuales con la animación

#### **Gestión de Estado de Botones**
```javascript
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
            
    filterButtons.forEach(btn => btn.classList.remove('active'));
            
    button.classList.add('active');
            
    const rating = button.dataset.rating;
            
    filterReviews(rating);
});
});

filterReviews('all');
```

---

### 3.4. Flujo Libre: Persistencia de Datos en Formulario

He implementado un sistema de persistencia para las selecciones de servicios usando **localStorage**, garantizando que las opciones marcadas por el usuario se mantengan incluso si recarga la página o navega entre secciones. Aquí doy mas informacion detalladamente:

#### **Flujo de Trabajo:**
1. **Recuperar Datos al Cargar la Página:**
   ```js
   const getSavedServices = () => {
     try {
       return JSON.parse(localStorage.getItem('selectedServices')) || [];
     } catch (error) {
       return []; // Si hay error, devuelve array vacío
     }
   };

   // Al iniciar: marca los checkboxes guardados
   checkboxes.forEach(checkbox => {
     checkbox.checked = savedServices.includes(checkbox.value);
   });
   ```
   - Recupera las selecciones almacenadas al cargar la página.
   - Si no hay datos o hay un error, inicia con un array vacío.

2. **Actualizar Datos en Tiempo Real:**
   ```js
   checkbox.addEventListener('change', ({ target }) => {
     const serviceId = target.value;
     let currentServices = getSavedServices(); // Obtiene el estado actual

     if (target.checked) {
       currentServices.push(serviceId); // Añade servicio
     } else {
       currentServices = currentServices.filter(id => id !== serviceId); // Elimina servicio
     }

     localStorage.setItem('selectedServices', JSON.stringify(currentServices)); // Guarda cambios
   });
   ```
   - Actualiza el localStorage **instantáneamente** al marcar/desmarcar un checkbox.
   - Usa `JSON.stringify` para convertir el array a formato almacenable.

3. **Reset al Enviar el Formulario:**
   ```js
   form.addEventListener('submit', (event) => {
     // ... validaciones ...
     localStorage.removeItem('selectedServices'); // Limpia almacenamiento
     checkboxes.forEach(checkbox => checkbox.checked = false); // Desmarca visualmente
   });
   ```
   - Elimina los datos guardados después de enviar el formulario.
   - Resetea los checkboxes para una nueva interacción.

Al hacer todo esto logro que los cambios se reflejen en todas las pestañas abiertas y que los datos sobrevivan a recargas de página y navegación, mientras utilizo seguridad con le `try/catch` para manejar posibles errores al parsear.

#### **Ejemplo de Datos Almacenados:**
```json
["prmanagement", "seo", "smm"]
```

Esto permite reconstruir el estado exacto de las selecciones del usuario en cualquier momento.

---

# 👀 ¿Cómo visualizar la página web?

##  VISUALIZAR LA WEBB CON GITHUB PAGES
[HAZ CLICK AQUÍ PARA VISITAR LA PÁGINA WEB](https://obezeq.github.io/Compass-Agency)

## VISUALIZAR LA WEB  EN LOCAL

### 📥 Clonar el repositorio (para los que les gusta lo *pro*):  

**Paso 1:** Abre tu terminal favorita y escribe esto (sí, copia-pega funciona)
```bash
git clone https://github.com/obezeq/Compass-Agency
```

**Paso 2:** Navega hasta la carpeta del proyecto como un GPS  
```bash
cd Compass-Agency
```


### 🌍 Ejecutar la web (modo *easy*):  
**Opción A** ➡️ Abre `index.html` directamente en tu navegador (sí, arrastrar-soltar también vale, o doble click). 

**Opción PRO** ➡️ Usa un servidor local (por si quieres jugar con fuego 🔥):  
Si tienes Node.js instalado:
```bash  
npx live-server  
```

O con Python (porque los clásicos nunca mueren):  
```bash  
python -m http.server 8000
```

👉 Luego abre http://localhost:8000 en tu navegador.
