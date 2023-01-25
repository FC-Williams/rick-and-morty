import Origin from "./Origin";

export default class Character {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: Origin;

    constructor(
        character?: Character,
        name: string = '',
        status: string = '',
        species: string = '',
        gender: string = '',
        image: string = '',
        origin?: Origin
    ) {
        if (character) {
            this.name = character.name;
            this.status = character.status;
            this.species = character.species;
            this.gender = character.gender;
            this.image = character.image;
            this.origin = character.origin;
        } else {
            this.name = name;
            this.status = status;
            this.species = species;
            this.gender = gender;
            this.image = image;
            this.origin = origin || new Origin();
        }
    }

    public static async getAll() {
        
        const res = await fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then()
            .catch(error => console.error(error));

            const characters = res.results.map((character: Character) => new Character(character));
            console.log(characters)
            return characters;
    }

} 