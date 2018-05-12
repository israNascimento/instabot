const app = require("./config/express")();

app.get("/", (req, res) => {
    res.render("home");
});