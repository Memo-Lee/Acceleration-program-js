1- Let değişkeni ES6 ile gelmiştir. ES5'de karşılığı 'var' dır.  
"tsc greeter.ts" ile ts kodumunuzu compile ederiz ve '.js' çıktısı alırız. Daha sonra 'node greeter.js' ile çalıştırabiliriz.  
  
2- Types  
Typescriptte değişkenlerin türleri belirlenebiliyor. Belirlenen bu türlere göre değişken ataması yapılmaz ise typescript, error döndürür.  
  
Enum (enumaration) : Bu yapı yazılım dilinde enum, enumaration ya da enum sabitleri olarak adlandırılır. Değişkenlerin alabileceği değerlerin sabit (belli) olduğu durumlarda programı daha okunabilir hale getirmek için kullanılır. Programda birçok değişkene tek tek sayısal değer vermek yerine "enum" kullanılabilir.  
  
NOT: ES5 yapısında enum tanımlaması olmadığı için function olarak compile eder.  
  
3- Type assertions  
bir variable 'any' olarak tanımladıysanız daha sonra ona bir değişken atadığınızda o type'ın methotlarını kullanamazsınız. Bu sebepten dolayı '(<type>message).' şeklinde type'ını belirlemek lazım.
