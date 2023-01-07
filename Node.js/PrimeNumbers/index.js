/* 
Komut satırından Node.js ile javascript uzantılı dosyaları 
çalıştırmak için: node dosya_adi.js veya node dosya_adi komutlarını kullanabiliriz. 

İki Sayı Arasındaki Asal Sayıları Bulmak

Örneğimizde senaryomuz şu şekilde: Komut satırından iki sayı girebileceğiz ve sonuç olarak
 bu iki sayı arasında bulunan asal sayıları komut satırı ekranına yazdıracağız. 
 Kısaca asal sayı tanımını tekrar hatırlayacak olursak: 
 Yalnız 1 ve kendisine bölünebilen, 1 den büyük doğal sayılardır.

Önce asal sayıları bulabileceğimiz showPrimeNumbers fonksiyonumuzu yazalım
 ve primeNumbers.js olarak kaydedelim.
*/

// bize sadece argümanlardan yeni bir nesne döner. arguments[0], arguments[1], ....arguments[n] ile n tane argümana ulaşabiliriz.
const arguments = process.argv.splice(2);
function showPrimeNumbers(lownumber,highNumber) {
    // lownumber ile highNumber arasındaki sayıları döndür.
    for (let i = lownumber; i <= highNumber; i++) {
        // asal = true;
        let isPrime = true;
        // i değerini j değerine atamak
        for (let j = 2; j <= i; j++) {
            // eğer i%j den kalan 0 veya j i'ye eşit değilse
            if (i%j === 0 && j!==i) {
                // asal = false
                isPrime = false
            }
        }
        // asal = true ise console.log'a yazdır.
        if (isPrime) {
            console.log(i);
        }
    }
}
// string değeri int değere döndürme yöntemlerinden biri
showPrimeNumbers(arguments[0]*1,arguments[1]*1);