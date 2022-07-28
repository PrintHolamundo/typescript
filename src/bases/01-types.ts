export let name = 'David'
export const age: number = 28
export const isValid: boolean = true

name = 'Daniela'



export const templateString = `Esto es un string multilinea
con una variable ${name}
y una constante ${age}
y una expresion ${1+1}
y una expresion ${isValid ? 'verdadero' : 'falso'}`


console.log(templateString)