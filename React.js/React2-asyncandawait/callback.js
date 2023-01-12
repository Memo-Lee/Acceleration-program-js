// 5 saniyede 1 kere çalışır ve function döndürür.
setTimeout(() => {
    console.log("hi");
},5000);

// her 1 saniye de functionu çalıştırır ve sonsuza kadar döner.
setInterval(() =>{
    console.log("naber");
},1000);

// functionun içerisine call-back function çağırmak
const sayHi = (cb) => {
    cb();
};
sayHi(() =>{
    console.log("hello");
});

// JSON random data çağırmak.
import fetch from "node-fetch";
import axios from "axios";
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users Yüklendi", users);

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((data) => data.json())
            .then((post) => console.log("Post yüklendi", post));
    })


async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();
    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("users",users);
    console.log("users",post1);
    console.log("users",post2);
}
getData();

(async () => {
    const {data : users} = await 
         axios("https://jsonplaceholder.typicode.com/users");
    const {data : post1} = await 
       axios("https://jsonplaceholder.typicode.com/posts/1");
    const {data : post2} = await 
        axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("users",users);
    console.log("post1",post1);
    console.log("post2",post2);
}) ();

// -------------------------------------------------------------------

