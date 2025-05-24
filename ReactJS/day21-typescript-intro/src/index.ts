// let n=10;
// n="a";
// Above mentioned gives error

// Declarations

// number
let n: number = 10;
n = 20;

//string
let s: string = "ABS";
s = "ABC";

// boolean
let b: boolean = false;
b = true;

// array
let array: number[] = [1, 2, 3];

let arrStr: string[] = ["ABC", "DEF", "GHI"];

let arrBool: boolean[] = [false, true, false];

//object
type userObject = {
    name: string;
    id: string;
    age: number;
    married: boolean;
    address: string;
};

let user: userObject = {
    name: "AKash",
    id: "@#$",
    age: 23,
    married: false,
    address: "KKD",
};

// Array of Object
let dataBase: Array<userObject> = [
    {
        name: "AKash",
        id: "@#$",
        age: 23,
        married: false,
        address: "KKD",
    },
    {
        name: "AKash",
        id: "@#$",
        age: 23,
        married: false,
        address: "KKD",
    },
];

// object of Array
type ourObject = {
    images: string[]
}

let imageDB: ourObject = {
    images: ["image1", "image2"];
}

//union
let numstr: number | string | boolean;
numstr = 2;
numstr = "AKASH",
    numstr = false;

//Intersection
// user - name,id,address
// admin - name,id,address,role
// superAdmin - name,id,address,role

//method1
type user = {
    name: string;
    id: string;
    address: string
}

type admin = {
    role: string
}

let adminAkash: user & admin = {
    name: "Akash",
    id: "1",
    address: "KKD",
    role: "Admin"
}

//method2
interface users {
    name: string,
    id: number,
    address: string
}

interface Admin extends users {
    role: string,
    access: boolean,
    phone1: number;
    phone2?: number
}

let object: Admin = {
    name: "Akash",
    id: 2,
    address: "KKD",
    role: "ADMIN",
    access: true,
    phone1: 12345
}


