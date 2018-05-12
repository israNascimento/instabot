module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("home");
    });

    app.get("/login", function(req, res) {
        console.log("Realizar login...");
        res.end();
    });
}