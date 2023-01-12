# Promise
Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir. Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar.

## PROMISE EXAMPLE

**Kitap Listeleme Örneği**
Şimdi geçen bölümde konuştuğumuz kitap listeleme örneğinde dönelim. Ne yapmıştık, listBooks fonksiyonunu addBook fonksiyonuna bir callbak ile yerleştirmiştik. Burada callback fonsiyonu yerine bir söz-promise vereceğiz.


