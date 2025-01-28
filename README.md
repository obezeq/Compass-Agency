# Compass Ageny

---

## **Análisis de la Estructura de HTML de COMPASS AGENCY**

---

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
