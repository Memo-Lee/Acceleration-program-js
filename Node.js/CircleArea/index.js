/*
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır. 
*/

const arguments = process.argv.splice(2);

function showCircle(r) {
    let area = 3.14*r*r;
    console.log("Yarıçap : "+r+" Alan :"+area);
}
showCircle(arguments[0]*1);