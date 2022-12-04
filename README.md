# Closet Premium 
![Pagina Home](/public/img/capturaHome.png)

##  Contexto General
`Closet es una marca real` de joyas y bijouterie importadas de alta calidad que opera en buenos aires argentina. Todas las joyas que aparecen en la web son reales y se pueden comprar, aunque de momento, Closet no está operando. Cuando lo haga, actualizaría la web y el README para mas información.  
<br><br/>

## Idea de la App
La idea de `Closet Premium` o de esta App es publicitar a la marca real mediante un e-comerce  ficticio e imaginario que da al cliente la sensación de sentirse en una de las tiendas mas prestigiosas.

Gracias al uso de Firebase, esta web puede editarse y convertirse en un e-comerce funcional. De momento es para ilustrar la belleza de estas piezas únicas.
<br><br/>

## Desarrollo
La aplicación fue desarrollada durante mi cursada en React.js, `Coderhouse` dictado por el profesor `Santiago Salkin`. 

Utilizamos [Create React App](https://github.com/facebook/create-react-app) para generar el entorno de desarrollo y en mi caso, para los estilos de la web no usé más librerías externas. Para la navegación utilizamos React Router Dom y la App fue diseñada e implementada con React y css. Para almacenar los datos usamos los servicios de Firebase, Firestore Database.

Utilice la metodología Desktop first para el estilizado de la aplicación. 

![Pagina Home](/public/img/capturaDesarrollo.png)
<br><br/>

## Funcionalidad
La aplicación cuenta con un menú de navegación en la parte superior para visitar las categorías y secciones de la página. Esta dividido en: 
- `Todos los productos`
- `Gama media`
- `Gama Alta` 
- `Contacto` (Que no fue implementado aun)
- `Carrito`.

Al hacer click en un producto serás redireccionado al detalle de ese producto gracias al uso de Urls Dinámicas. Se pedirían los datos del producto seleccionado a la base de datos y se mostrarían. Mediante el contador el usuario puede elegir la cantidad de unidades que desea agregar al carrito respetando el stock disponible. Al agregarse, podes visitar tu carrito y explorar tus selecciones. Para enviar una orden deberías rellenar un formulario para que entonces Closet se ponga en contacto. 
<br><br/>

### `Carrito`
Para el carrito utilizamos la herramienta de React `Context`.  Las principales funciones del carrito son:
- Limpiar el carrito
- Evaluar el costo total
- Evaluar la cantidad de productos
- Remover un producto del carrito
- Añadir productos. 

Estas funciones son importadas por varios componentes de la aplicación que hacen uso de estas funcionalidades. `¡Cuidado!`, si refrescas la pagina antes de hacer tu orden vas a perder el carrito. 

![Pagina Home](/public/img/capturaCarrito.png)
<br><br/> 

## Producto
Cada producto que selecciones renderizara una foto, un título, un a descripción, `un poder`, y un contador de stock. El nombre de cada anillo hace honor a su épica e imaginaria historia que es contada en cada descripción. Luego, cada anillo tiene su propio poder, por lo que podés elegir el que mas te guste. 
Los anillos de Alta calidad se destacan por tener piedras preciosas y mejores poderes. He de ahí su alto precio. 

![Pagina Home](/public/img/capturaProducto.png)
<br><br/> 

## Que aprendí Durante React.js
Lo que mas me llevo es la idea de la programación `modular`. La creación de `componentes reutilizables`, no repetirse, hacer lo justo y lo necesario.  

