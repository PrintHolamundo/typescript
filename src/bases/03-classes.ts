

export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string) {
        this.id = id;
        this.name = name;
    }
}


export const pikachu = new Pokemon(4, 'pikachu');