export class Recipe {
    imagePath: string;
    description: string;
    name: string;
    constructor(nameArg: string, descriptionArg: string, url: string){
        this.name = nameArg;
        this.description = descriptionArg;
        this.imagePath = url;
    }
}
