1- Let değişkeni ES6 ile gelmiştir. ES5'de karşılığı 'var' dır.  
"tsc greeter.ts" ile ts kodumunuzu compile ederiz ve '.js' çıktısı alırız. Daha sonra 'node greeter.js' ile çalıştırabiliriz.  
  
2- Types  
Typescriptte değişkenlerin türleri belirlenebiliyor. Belirlenen bu türlere göre değişken ataması yapılmaz ise typescript, error döndürür.  
  
Enum (enumaration) : Bu yapı yazılım dilinde enum, enumaration ya da enum sabitleri olarak adlandırılır. Değişkenlerin alabileceği değerlerin sabit (belli) olduğu durumlarda programı daha okunabilir hale getirmek için kullanılır. Programda birçok değişkene tek tek sayısal değer vermek yerine "enum" kullanılabilir.  
  
NOT: ES5 yapısında enum tanımlaması olmadığı için function olarak compile eder.  
  
3- Type assertions  
bir variable 'any' olarak tanımladıysanız daha sonra ona bir değişken atadığınızda o type'ın methotlarını kullanamazsınız. Bu sebepten dolayı '(<type>message).' veya '(message as string).' şeklinde type'ını belirlemek lazım.  
  
4- Functions  
Funtions da parametrelerin typelarını önceden '(a:number, b:number,c?:number)' belirleyebiliriz. Functionun resultunu önceden 'function():string' belirleyebiliriz. Funtionun birçok parametresini 'function(...a:number[])' ile bekleyebiliriz.  
const getAverage = (): string => {return;} şeklinde yada geri dönüş beklenmiyor ise 'void' ile function oluşturabiliriz.
  
5- İnterfaces  
TypeScript'deki interface, temelinde bir tip tanımından başka birşey değildir. class ve function'lar nesnelerin davranışlarını tanımlarken, interface'ler nesnelerin/objelerin tiplerini tanımlar şeklinde düşünebiliriz. Metotlara ya da functionların parametlerini tanımlayabiliyoruz. Üreteceğimiz bilgilerin imzasını taşıyor. Onların nasıl hareket etmesi gerektiğini,hangi özelliklere sahip olması gerektiğini tutan bir şema olarak düşünebiliriz. Bu şemadan bir nesne tanımlayabilmek için class'a çevirmemiz lazım.
  
6- Class


