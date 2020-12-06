const 
    express =   require("express"),
    app =       express(),
    tabla =     require('./json/tablaPeriodica.json'),
    equipo =    require("./json/equipo.json"),
    info =      require("./json/info.json"),
    fs =        require('fs'),
    pug=        require("pug"),
    PORT =      process.env.PORT || 5500;

//config
app.use(express.static(__dirname + "/public", {extensions:['html']}));
app.set("view engine", "pug");

//options
let options = {
    pretty:true,
    pageName: "Equipo 11",
    equipo: equipo
}
//temario ...
let temario = [];
for(let par in info.parciales) {
    temario.push(
        {
            title: info.parciales[par].title,
            temas:[]
        })
    info.parciales[par].temas.forEach((tema) => {
        temario[par].temas.push(tema.titulo.split(" ").join("-"))
    })
}
options.temario = temario;
console.log(temario)
//gets
app.get("/", (req, res) => {
    options.title = "Pagina Principal"
    res.render("index",options);
    fs.writeFile("public/html/index.html", 
        pug.renderFile("views/index.pug", options), (err) => {
            if (err) {
                console.error(err);
            }
        })
}).get('/tabla', (req, res) => {
    options.title = "Tabla Periodica";
    options.tabla = tabla.elements;
    res.render("tabla", options);
    fs.writeFile("public/html/tabla.html", 
        pug.renderFile("views/tabla.pug", options), (err) => {
            if (err) { 
                console.error(err);
            }
        })
}).get("/parcial:parcial", (req, res) => {
    equipo.show = true;
    options.parcial = info.parciales[req.params.parcial - 1];
    options.title = options.parcial.title;
    res.render("parcial", options);
    fs.writeFile(`public/html/parcial${req.params.parcial}.html`, 
        pug.renderFile("views/parcial.pug", options), (err) => {
            if (err) { 
                console.error(err);
            }
        })
})

// Listen on port ...
app.listen(PORT, () => {
    console.log(`Online on port: ${PORT}`);
});