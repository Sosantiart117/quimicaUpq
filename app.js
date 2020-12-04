const 
    express =   require("express"),
    app =       express(),
    tabla =     require('./tablaPeriodica.json'),
    fs =        require('fs'),
    pug=        require("pug"),
    PORT =      process.env.PORT || 5500;

//config
app.use(express.static(__dirname + "/public", {extensions:['html']}));
app.set("view engine", "pug");

//options
let options = {
    pretty:true,
    pageName: "Equipo 11"
}

//gets
app.get("/", (req, res) => {
    options.title = "Pagina Principal"
    res.render("index",options);
    fs.writeFile("public/html/index.html", 
        pug.renderFile("views/index.pug", options), (err) => {
            if (err) {
                console.log(err);
            }
        })
}).get('/tabla', (req, res) => {
    options.title = "Tabla Periodica";
    options.tabla = tabla.elements;
    res.render("tabla", options);
    fs.writeFile("public/html/tabla.html", 
        pug.renderFile("views/tabla.pug", options), (err) => {
            if (err) { 
                console.log(err);
            }
        })
}).get("/PrimerParcial", (req, res) => {
    options.title = "Primer parcial";
    res.render("primerparcial", options);
    fs.writeFile("public/html/primerparcial.html", 
        pug.renderFile("views/primerparcial.pug", options), (err) => {
            if (err) { 
                console.log(err);
            }
        })
}).get("/SegundoParcial", (req, res) => {
    options.title = "Segundo Parcial";
    res.render("segundoparcial", options);
    fs.writeFile("public/html/segundoparcial.html", 
        pug.renderFile("views/segundoparcial.pug", options), (err) => {
            if (err) { 
                console.log(err);
            }
        })
})

// Listen on port ...
app.listen(PORT, () => {
    console.log(`Online on port: ${PORT}`);
});