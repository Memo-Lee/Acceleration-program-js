/*
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren
 ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında
 yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
*/

// Pi sayısı tanımlandı
const {PI} = Math;
// Pi sayısı * functionun parametresi (radius)**2 
const circleArea = ((radius) => {
    // Circle alan hesaplaması
    let circleArea = PI*radius**2;
    console.log(circleArea);
});
const circumference = ((radius) =>{
    let circumference = 2*PI*radius;
    console.log(circumference);
});

module.exports = {
    circleArea,
    circumference
};