npm i react-router-dom  
exact prop -> routerlarda geçişlerin düzenli olmasını sağlar.
url parameters --> Routen pathinde [path="/:id"] verererek daha sonra route'un componentinde "let {id} = useParams();" useParams() hooku ile gelen parametreyi çağırabiliriz. useParams , react router dom libraries hookudur.  
axios : En basit hali ile client side uygulamalarda HTTP işlemlerini kolay bir şekilde yapabilmemizi sağlayan bir JavaScript kütüphanesidir.
Nesting : İç içe route tanımlamaları state; [users içerisindeki user için] V6 ile <Outlet/> kullanımı eklendi.
NavLink : Link ile işlevi aynı fakat style olarak özelleştirme için tercih edilir. ActiveStyle={} veya ActiveClassName={} isminde propları var "exact" tanımı kullanılmalı. 