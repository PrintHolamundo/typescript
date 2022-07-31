export const pokempnIds = [1,20,4,5,6,7,8,9,10,11,12];


interface Pokemon{
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

export const charmander:Pokemon = {
    id: 2,
    name: "Charmander",
}

console.log(bulbasaur)