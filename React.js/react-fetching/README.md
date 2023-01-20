| Fetching |
| ------------- |
| Herhangi bir kütüphane kullanmadan "fetch" metodu ile ilgili veri kaynağına erişebiliyoruz.|
| String olarak gelen veriyi json formatında vermediği için json() formatına çeviriyoruz.|
| Kısıtlı browser desteği|

| Axios |
| ------------- |
| Fetch'in aksine bir kütüphanedir.|
| Veri json formatında gelir.|
| Geniş browser desteği|

## .then()  
Promise beklenilen işlemi gerçekleştirdikten sonra yapılacak adımlar için .then() fonksiyonu çağırılır.  
İçerisindeki fonksiyonun parametresi 'resolve()' ya da 'res()' ile gönderilen parametredir.  

## .catch()  
Eğer istek dahilinde reject() çağırıldığında veya öngörülemeyen bir hata sonucu promise başarısız olduğunda .then() fonksiyonu es geçilerek,  
.catch() içerisindeki fonksiyon çağırılır ve hatalı durumda yapılacak adımlar izlenir.  

## .finally()  
JavaScript finally anahtar kelimesi hata oluşması veya oluşmaması durumunda çalışacak kodları yazdırmak için kullanılır.  

