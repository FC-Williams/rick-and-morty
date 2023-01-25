export default class Origin {
    name: string;

    constructor(origin?: Origin, name  = ''){
        if (origin) {
            this.name = origin.name;
        } else {
            this.name = name;
        }
    }
}