const app = require("express")();

module.exports = function() {    
    app.engine('.html', require('ejs').__express);

    app.set("views", "./app/views");
    app.set('view engine', 'ejs');

    app.listen(3000);
    return app;
}