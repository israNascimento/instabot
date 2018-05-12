module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("home");
    });

    app.get("/login", function(req, res) {
        const redirect = "http://localhost:3000/code";
        res.redirect("https://api.instagram.com/oauth/authorize/?client_id="
            +process.env.CLIENT_ID+"&redirect_uri="+redirect
            +"&response_type=code");
        res.end();
    });

    app.get("/code", function(req, res) {
        res.end("Ola codigo"+req.params);
    })
}