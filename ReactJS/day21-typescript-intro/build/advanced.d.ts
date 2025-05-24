type rgb = [number, number, number, string];
declare let color: rgb;
type union = number | string | boolean;
declare let numstrbol: union;
declare function getValue<type>(value: type): type;
declare class Car {
    brand: string;
    model: string;
    constructor(b: string, m: string);
}
declare let myCar: Car;
