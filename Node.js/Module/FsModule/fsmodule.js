/* FS File System Modülü

Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine 
{"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim. */

// employees.json dosyası oluştur ve veri ekle 5sn , try catch ile kontrol et ve oku daha sonra silme işlemi gerçekleştirdir
// ekleme 5 sn , okuma 10 sn , silme 15 sn adımlar halin de asenkron bir çalışma
// tüm işlemleri try catch ile takip et


    const fs = require('fs');
    setTimeout(() => {
        fs.writeFile('employees.json','{"name":"Employee 1 name","salary":2000},','utf8',(err)=>{
            if(err) console.log(err);
            console.log('Json file created...')
        });
    }, 1000);

    setTimeout(() => {
        fs.readFile('employees.json','utf8',(err,data)=>{
            if(err) console.log(err);
            console.log("Json dosyasına yeni veriler eklendi : "+data);
        })
    }, 3000);
    
    setTimeout(() => {
       fs.appendFile('employees.json','{"name":"Employee name update","solary":5000}','utf8',(err)=>{
        if(err) throw (err);
        console.log('Json file Updated...')
       });
    }, 6000);

    setTimeout(() => {
        fs.unlink('employees.json',(err)=>{
            if(err) throw err;
            console.log('Json file deleted...');
        });
    }, 10000);

