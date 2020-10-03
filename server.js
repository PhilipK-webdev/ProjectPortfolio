const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

if (process.env.NODE_ENV === "production") {
    const root = require('path').join(__dirname, 'client', 'build')
    app.use(express.static(root));
    app.get("*", (req, res) => {
        res.sendFile('index.html', { root });
    })
}

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
