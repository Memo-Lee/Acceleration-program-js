//PROMISE
// JSON random data çağırmak.
// import fetch from "node-fetch";
// import axios from "axios";

const getUsers = () => {
    return new Promise(async (res,rej) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async (res,rej) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users" + post_id);
        resolve(data);
    });
}

(async () => {
    try {
        const users = await getUsers();
        const post = await getPost();

        console.log(users);
        console.log(post);
    } catch (e) {
        console.log(e);
    }
});

Promise.all([getPost(),getUsers()]).then(console.log).catch(console.log);