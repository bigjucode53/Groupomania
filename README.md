Pour ce projet l'installation de NodeJS, Express, Sequelize et Mysql est requise sur votre machine.

technologies utilisées:



 NodeJS, Express, Sequelize et Mysql , pour le backend.


 VueJS pour le frontend.
 
 ATTENTION bien utiliser nvm use node sur le frontend et sur le backend 
 
 
 
 ____________________________________________________________________________________
 
 **BACKEND**

 Installer mysql dans le backend => npm i mysql
 (par default le User=root et il n'y a pas de mot de passe)
 Pour modifier le mot de passe faites la commande:
 mysqladmin -u -root password VOTRE MOT DE PASSE

 À la racine du dossier backend, faites un npm install

 Faites un node server ou nodemon server (node recquis pour cette aplication)
 
 
 
 _____________________________________________________________________________________
 
 **BASE DE DONNEES**
 
 Entrez: - npm i sequelize
         - sequelize init

 Dans le dossier backend modifer le mot de passe dans config/config.json

 Créez une base de données nommée "groupomania" dans votre base de données mysql. Command : CREATE DATABASE groupomania;

 Pour finaliser la base de données, executez dans la racine du dossier backend : Command : "sequelize db:migrate"

 Puis lancez le serveur avec "npm start"

 Installer le logiciel MAMP
 Dans preférences/ports cliquez sur le ports 80 & 3306
 Ensuite cliquez sur START


_______________________________________________________________________________________

**FRONTEND**

Clônez le repo sur lequel vous vous trouvez.

À la racine du dossier frontend => npm install

Puis npm run serve

Vous verrez ensuite 2 urls: copier et coller l'url Network dans votre navigateur web.  
  
  
  
  
  



