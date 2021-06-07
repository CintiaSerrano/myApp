/* Para saber la versión del GIT, debemos poner en consola
git --version
y te devuelve la versión, en este caso
git version 2.31.1.windows.1 

Para comenzar seguimiento en git poner en consola
git init
y devuelve
Initialized empty Git repository in C:/Users/Ivis/Documents/Programación/CLASE17/.git/
quiere decir que ya comenzó el seguimiendo.

Es así que se crea un almacen donde se guarda todo dentro de la carpeta
de inicio. En este caso CLASE 17.
Todas las carpetas dentro de clase 17 tmb tendrán seguimiento. 

git status
te muestra el status de archivos con seguimiento.
Cuando se pone una U en verde al lado de un archivo creado
es porque no tiene seguimiento. 
git add.
hace que se ALMACEN todos los archivos sin seguimiento
se "comitiaron" y aparece la letra A (de agregado) al lado del archivo. 

Antes de guardarlo en el almacén, hay q ordenarlo
y para eso se usa 
git commit -m"mensaje" 
Tener en cuenta el COMMIT, o sea, el MENSAJE
que le ponemos de nombre. Ya que es MUY IMPORTANTE,
ESTE DEBE SER PROLIJO! Por eso la etiqueta debe decir lo que hace ese archivo. 
***************************************************************************************
Author identity unknown
*** Please tell me who you are.
Run
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
to set your account's default identity.
Omit --global to set the identity only in this repository. 
fatal: unable to auto-detect email address (got 'Ivis@DESKTOP-LTE7EVO.(none)') 
**************************************************
git log
te muestra todos los commits que hicimos hasta ahora
*********************************
git config user.name
nombre de usuario
git config user.email
mail registrado*

**************************************
$ git remote add origin https://github.com/emignis/myApp.git
ESTO ES HACIENDOLO DESDE LA PAGINA DE GIT HUB
CREANDO UN COMMIT DESDE AHÍ

$ git remote -v
origin  https://github.com/emignis/myApp.git (fetch)
origin  https://github.com/emignis/myApp.git (push) 

Así sabemos desde donde estamos trabajando. Tiene que quedar
el link de la url q nos dio cuando creamos el repositorio.

git push origin master
Estamos diciendo que estamos pusheando en la rama master.
NO se puede PUSHEAR si no COMITEAMOS

git pull origin master
Trae los cambios que traemos del remoto al local
*/