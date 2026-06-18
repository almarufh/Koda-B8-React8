# Form Login

Aplikasi sederhana untuk logic login dan logout menggunakan penyimpanan global state context

## Alur FLow 
1. Have data user static
    admin@mail.com admin123
    owner@mail.com pw123456
2. Input tidak sesuai maka akan mendapatkan alert Email atau password salah!
3. input benar maka akan menyimpan data user kedalam state context
4. di alihkan ke halaman dashboard yang halaman tersebut menggunakan data context tersebut untuk menampilkan user logi
5. menekan logout akan menghapus dan menavigate ke halaman login
6. membuka paksa link dashboard auto navigate ke halamaan login


## Screenshot
Halaman Login
![Login](/public/Login.png)


Halaman Dashboard
![Login](/public/Dashboard.png)