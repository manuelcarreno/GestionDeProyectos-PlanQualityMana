Guia de instalacion

Requerimientos, tener previamente instalados
node,js
xampp
dependencias 

Comandos para instalar dependencias
npm i express express-handlebars express-session mysql express-mysql-session morgan bycryptjs passport passport-local timeago,js connect-flash express-validator

npm i nodemon -D


Para hacer uso de la aplicación, usaremos xampp para utilizar sus servicios de apache y mysql

Paso 1: entrar a la cmd
Paso 2:usar el comando mysql -u root (+ “-p” en caso de tener contraseña)
Paso 3: Una vez dentro de mysql ejecutar los comandos contenidos dentro del archivo que se encuentra en database/db.sql
Paso 4: usar comando “exit” para salir de mysql
Paso 5: entrar a a la ruta donde está el prototipo ejemplo:(cd C:\Prototipo)
Paso 6: utilizar npm run dev para abrir el servidor local
Paso 7: abrir el navegador
Paso 8: ir a la ruta “localhost:4000”
