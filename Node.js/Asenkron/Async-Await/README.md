# Async - Await
Async - Await yapısı ES8 ile birlikte gelmiştir ve Promise yapısının daha anlaşılır bir söz dizimi ile yazılmasıdır. Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner. Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa ilgili Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir.

## Async - Await Data Control Example
Buradan kitap listeleme örneğine tekrar geri dönecek olursak addBook fonksiyonunun içerisinden bir promise dönüyoruz aynı zamanda await addBook await anahtar kelimesi sayesinde öncelikle addBook fonksiyonunun çözümlemesini almadan listBooks fonksiyonu çalıştırılmıyor. try catch bloku sayesinde olabilecek hataları yakalıyoruz.

