const 
    express = require("express"),
    app = express(),
    tabla = require('./tablaPeriodica.json'),
    PORT = process.env.PORT || 5500;


// Listen on port ...
app.listen(PORT, () => {
    console.log("Andamos Arriba!");
});