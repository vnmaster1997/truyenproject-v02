export class Product {
    id: number;
    name: string;
    author: string;
    description: string;
    price: string;
    /*quantity: string;*/
    imageUrl: string;

    constructor(id,name,author,description='',price='0',imageUrl='') {
        this.id=id
        this.name= name
        this.author= author
        this.description= description
        this.price= price
        /*this.quantity= quantity;*/
        this.imageUrl= imageUrl
    }
}