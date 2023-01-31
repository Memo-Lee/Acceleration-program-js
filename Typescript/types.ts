let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: any; // herhangi bir değer alabilir.
let e: number[] = [1,2,3] // number değişkenleri barındıran array tanımlaması
let f: Array<number> = [1,2,3]; // e ile aynı anlama gelir.
let g: any[] = [1,'a',true]; // array içerisinde herhangi türde atamalar yapılabilir.
let h: [string,number,boolean] = ['a',5,false]; // tuple sıra ile arr içerisinde variable tanımlaması

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Paymnet {kredi=0,havale=5,kapidaodeme=2,eft=3};

let kredi = Paymnet.kredi; // 0
let havale = Paymnet.havale; // 5
let kapidaodeme = Paymnet.kapidaodeme; // 2
let eft = Paymnet.eft; // 3