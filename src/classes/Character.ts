import ErrorHandler from "./Error";
import Origin from "./Origin";

export default class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: Origin;

    constructor(
        character?: Character,
        id: number = 0,
        name: string = '',
        status: string = '',
        species: string = '',
        gender: string = '',
        image: string = '',
        origin?: Origin
    ) {
        if (character) {
            this.id = character.id;
            this.name = character.name;
            this.status = character.status;
            this.species = character.species;
            this.gender = character.gender;
            this.image = character.image;
            this.origin = character.origin;
        } else {
            this.id = id;
            this.name = name;
            this.status = status;
            this.species = species;
            this.gender = gender;
            this.image = image;
            this.origin = origin || new Origin();
        }
    }

    public static async getAll() {
        const data = await fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())

            if (data.error) {
                throw new Error(data.error);
            } else {
                const characters = data.results.map((character: Character) => new Character(character));
                return characters;
            }
    }

    public static async getByName(params:IParams) {

        const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${params.name}`)
            .then(response => response.json())
            .catch(error => { throw new Error(error) })

            if (data.error) {
                throw new ErrorHandler(data);
            } else {
                const characters = data.results.map((character: Character) => new Character(character));
                return characters;
            }
    }

}

export interface IParams {
    name: string;
}