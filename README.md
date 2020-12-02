 # Rick and Morty character finder ☺️ # 
*Ejercicio de evaluación final de programación con el framework React para el módulo 3 de Adalab*

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje.

## **OBJETIVO**
Se trata de una página web desarrollada en **React**, con un listado de personajes de la serie Rick and Morty, dónde podemos filtrar por el nombre del personaje. 

## **DESARROLLO**
> 1. **Listado de personajes**
Petición al API de servicio de datos, a través de campo de búsqueda a través de fetch, recibiendo de vuelta un JSON con la información de los personajes. 

Servicio de datos : https://rickandmortyapi.com/documentation/#get-all-characters

> 2. **Pintar un listado de personajes**
Recorriendo el array de datos con un método map, extrayendo y pintando información del personaje.

> 3. **Filtrado de personajes**
A través de un campo de texto se buscan personajes por su nombre. Al escribir en este, se filtran en la interfaz los personajes que contienen las letras escritas en el input. 

 4. **Utilizar React Router**
 Al hacer click sobre alguna de las tarjetas se pinta la tarjeta clicada a pantalla completa con el detalle de cada personaje. 

En los detalles aparece la siguiente información: imagen, nombre, especie, planeta de origen, género,  número de episodios en los que aparece el personaje, listado de episodios, y si está vivo o muerto.

RESULTADO:
**https://nuriadiazcandela.github.io/React-project-Rick-Morty-finder/**
