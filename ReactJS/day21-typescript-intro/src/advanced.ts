//tuple
type rgb = [number,number,number,string];
let color:rgb = [123,456,789,"ABC"];

type union = number | string | boolean;
let numstrbol : union = 23;
numstrbol="ABD";
numstrbol = true;

// generic functions
function getValue<type>(value:type){
    return value
}

getValue<number>(23);
getValue<string>("ABC");

// class
class Car{
    brand : string;
    model : string;
    constructor(b:string,m:string){
        this.brand =b,
        this.model =m
    }
}
let myCar = new Car("Mahendra","Thar");