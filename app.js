const 
    express = require("express"),
    app = express(),
    tabla = require('./tablaPeriodica.json'),
    PORT = process.env.PORT || 5500;

//config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

//pages
app.get('/', (req, res) => {
    res.render("index",{tabla:tabla.elements});
});

// Listen on port ...
app.listen(PORT, () => {
    console.log("Andamos Arriba!");
});