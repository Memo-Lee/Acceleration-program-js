useFormik kullanarak daha sade return alanı oluşturabiliriz. HandleChange ve handleSubmit proplarını kullanarabiliriz.
formik : handleSubmit, handleChange, handleBlur values, errors, touched gibi propları mevcut
yup : validation işlemleri için kullanılan kütüphane. Backend,html dosyaları,react vs. kullanılabilir. Yapılan post işlemlerini kurallara uygun olacak şekilde kontrol ediyor ve uygun değilse işlemi gerçekleştirmiyor. Yup içerisinde tanımlanan değerler ile verilen state/object proplarının aynı olması gerekiyor. ".oneOf([yup.ref('password')])" spesifik bir yup confirmPassword kontrolü. 
