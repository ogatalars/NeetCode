Set
The Set object lets you store unique values of any type, whether primitive values or object references.

Description
Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

// Usado para remover elementos duplicados de um Array

const numeros = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numeros)])

// [2, 3, 4, 5, 6, 7, 32]

Map ->
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
