declare let n: number;
declare let s: string;
declare let b: boolean;
declare let array: number[];
declare let arrStr: string[];
declare let arrBool: boolean[];
type userObject = {
    name: string;
    id: string;
    age: number;
    married: boolean;
    address: string;
};
declare let user: userObject;
declare let dataBase: Array<userObject>;
type ourObject = {
    images: string[];
};
declare let imageDB: ourObject;
declare let numstr: number | string | boolean;
type user = {
    name: string;
    id: string;
    address: string;
};
type admin = {
    role: string;
};
declare let adminAkash: user & admin;
interface users {
    name: string;
    id: number;
    address: string;
}
interface Admin extends users {
    role: string;
    access: boolean;
    phone1: number;
    phone2?: number;
}
declare let object: Admin;
