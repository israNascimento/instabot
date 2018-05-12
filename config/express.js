const app = require("express")();
const load = require("express-load");


module.exports = function() {    
    app.engine('.html', require('ejs').__express);

    app.set("views", "./app/views");
    app.set('view engine', 'ejs');

    app.listen(3000);

    load("routes", {cwd: 'app',verbose:false})
        .into(app);

    return app;
}