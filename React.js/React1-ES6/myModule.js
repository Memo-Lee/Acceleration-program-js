// 1. YONTEM' de function yazarak kullanıyorum.
// function Topla(a,b) {
//     return a+b;
// }

// 2. YONTEM' de function yazmıyoruz fakat aynı işlemleri yapabiliyoruz.
// const Topla = (a,b) => {
//     return a + b;
// }

// default yazdığımız da "import funtionName" şeklinde yanımlayabiliyoruz.
// süslü parantez {} , içerisine almamıza gerek yok
export default (name) => {
    console.log(`hello ${name}`);
};

// Aritmetiksel örneği
const topla = (a,b) => a+b;
const cikar = (a,b) => a-b;

// string örneği
const text = "Text";

// object örneği
const user = {
    name : "Mehmet",
    surname : "Seven",
};

// array örneği
const users = [
    {
        name : "Ahmet",
        surname : "Tarık",
    },
    {
        name : "Tayfun",
        surname : "Erbilen",
    },
];

// tüm functionların başına export yazmaktansa hepsini bir yerde tanımlayabiliriz.
export {
    topla,
    cikar,
    text,
    user,
    users,
};