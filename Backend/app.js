const express = require("express");//Importation du package express (frameworks pour faciliter l'usage de Node js)
const app = express();
const bodyParser = require("body-parser");//Importation du package bodyparser, pour rendre les données du corps de tous types de requêtes exploitable
const messageRoutes = require("./routes/message");//Importation des routers
const commentRoutes = require("./routes/comment");//Importation des routers
const userRoutes = require("./routes/user");//Importation des routers
const profileRoutes = require("./routes/profile");//Importation des routers
const path = require("path");//Importation pour accéder au path du server

/* Plugins de sécurité */
//Package helmet (13 middleware pour sécuriser les données et les connexions)
const helmet = require("helmet");                     
//Package hpp (to protect your system from HTTP parameter pollution attacks)
const hpp = require("hpp");
//Middleware express-rate-limit pour limiter le nombre de requêtes 
const rateLimit = require("./middleware/limiter");


/* Fin sécurité */


//Ajout des headers aux réponses pour permettre le CORS 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use(helmet());
app.use(hpp());
app.use("/auth", rateLimit.authLimiter);


app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/messages", messageRoutes);
app.use("/api/messages/", commentRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/auth", profileRoutes);

module.exports = app;
