# Lifecycle
DOM'da oluşturulan (render) her React bileşeni, oluşturma işleminden önce ve sonra bir dizi adımdan geçer. Bir bileşen her oluşturma işleminde “Yaşam Döngüsü (lifecycle)” olarak adlandırılan temel adımlardan geçer.

**useState**
useState() iki adet değer alan bir hook. Birincisi, hooku kullandığınzda verdiğiniz default değeri ve ondan sonra gelecek olan değerleri karşılayacak olan değişken, ikincisi ise değeri değiştirme fonksiyonudur.

**useEffect**
useEffect() fonksiyonunu kullandığınızda React, DOM ile ilgili herhangi bir işlem tamamlandığında çağıracaktır. React, varsayılan olarak ilk render da dahil olmak üzere her render işleminden sonra effect fonksiyonunu çalıştırır.

## Lifecycle Example


