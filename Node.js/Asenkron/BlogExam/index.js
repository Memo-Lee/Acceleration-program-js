/* Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, 
sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım. */

const blogs = [
    {header : "Blog 1", author:"Poster 1"},
    {header : "Blog 2", author:"Poster 2"},
    {header : "Blog 3", author:"Poster 3"}
];
// blog listeleme işlemi
const listBlogs = () => {
    blogs.map((blog) => {
        console.log(blog.header);
    });
};
// blog ekleme işlemi
const addBlog = (newBlog) => {
    const promise1 = new Promise((resolve,reject)=>{
        // objeye pushlama işlemi
        blogs.push(newBlog);
        // resolve olumlu dönüşü ile resolve(blogs) döner
        resolve(blogs);
        // rejecet('BIR HATA OLUSTU VE BLOG OLUSTURULAMADI');
    });
    return promise1;
};
// try catch ile kontrol ediliyor.
async function showBlogs(){
    try {
        await addBlog({header:"Blog 4",author:"Poster 4"})
        // eğer try olumlu dönerse listBlogs func çalıştırılır.
        listBlogs();
    } catch (error) {
        console.log(error);
    }
}

showBlogs();