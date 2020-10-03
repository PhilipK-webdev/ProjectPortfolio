const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname, 'client/build'));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "client", "build", "index.html")
        );
    });
}

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
