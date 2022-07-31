import axios from 'axios';

export class Pokemon {

    get imageUrl(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string
    ) { }

    scream() {
        console.log(`${this.name.toLocaleUpperCase()}!!!`)
    }
    speak() {
        console.log(`${this.name},${this.name}`)
    }
    async getMoves() {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/25`)
        console.log(data.moves)

        return data.moves

    }

}


export const pikachu = new Pokemon(25, 'pikachu');

// console.log(pikachu);
// pikachu.scream();
// pikachu.speak();
// console.log(pikachu.getMoves());
pikachu.getMoves()