# Validación de una tarjeta de crédito

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Investigación UX](#2-investigación-ux)
* [3. Algoritmo de Luhn](#3-algoritmo-de-lunh)

***

## 1. Resumen del proyecto

El presente proyecto consta en una aplicación web que le permite a un
usuario validar el número de una tarjeta de crédito. Además, tiene 
implementada una funcionalidad para ocultar todos los dígitos de una tarjeta,
menos los últimos cuatro.

![vista final del proyecto](https://github.com/CarmenMerino/LIM017-card-validation/blob/prueba-1/src/imagenes/vista-final.png?raw=true)

## 2. Investigación UX

Para iniciar con el proyecto de la validación de una tarjeta de crédito, 
se definió una temática y el público objetivo. En esta oportunidad tomamos
el Mundial Qatar 2022, específicamente en un partido jugado por Perú ante Francia. 

Las vistas realizadas en este proyecto, se trabajaron pensando en los hinchas 
peruanos, que actualmente sueñan con volver a ver a su país en la que es,
sin lugar a dudas, la fiesta más grande del fútbol mundial. 

A través de la plataforma creada, los hinchas peruanos podrían comprar sin problema
las entradas para los partidos donde 'Blanquirroja' haría rodar la pelota en tierras
asiáticas. 

Prototipo: 

![prototipo](https://github.com/CarmenMerino/LIM017-card-validation/blob/prueba-1/src/imagenes/prototipo.jpg?raw=true)

## 3. Algoritmo de Luhn
El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.