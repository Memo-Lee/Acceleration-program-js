# Fs Module

**Dosya Okumak**
Buradaki fonksiyonlarımızda kullanım yaygınlığı açısından asenkron versiyonlarını kullanacağız. Dosya okumak için fs.readFile fonksiyonu kulancağız.

**Dosya Yazmak**
Dosya oluşturmak ve sonrasında dosyaya verilerin yazılması için fs.writeFile fonksiyonu kullanılır.

**Dosyaya Veri Eklemek**
Var olan herhangi bir dosyaya veri eklemek için fs.appendFile fonksiyonu kullanılır.

**Dosyaya Silmek**
Dosya silmek için fs.unlink fonksiyonu kullanılır.

**Klasör Oluşturmak**
Şimdi biraz da klasörler üzerine konuşalım. Klasör oluşturmak için fs.mkdir fonksiyonu kullanılır. Klasör oluşturmada tekil değilde içiçe klasörler oluşturulmak istendiğinde fonksiyona { recursive: true } parametresi eklenmelidir. 

**Klasör Silmek**
Klasör silmek fs.rmdir fonksiyonu kullanılır. Klasör silme işleminde de tekil değilde içiçe klasörlersilmek istendiğinde fonksiyona { recursive: true } parametresi eklenmelidir. 

## FsModule Example
**
FS File System Modülü

Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine 
{"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
**


