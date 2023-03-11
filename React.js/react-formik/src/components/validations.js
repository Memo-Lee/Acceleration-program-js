import * as yup from 'yup'

let validations = yup.object({
    email: yup.string().email('Lütfen geçerli bir mail adresi giriniz.').required('Zorunlu alan'),
    password: yup.string().min(5, 'Password minimum 5 karakterli olmalı').required('Zorunlu alan'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password ile uyuşmuyor').required('Zorunlu alan'),
});

export default validations;