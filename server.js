var express = require("express"),
    app = express();

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 2020, function () {
    console.log("server nor running on port ", process.env.PORT || 2020);
})