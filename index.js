const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("  ____        _               _     _");
    console.log(" |  _ \\      | |             | |   | |");
    console.log(" | |_) | ___ | |__  _ __ ___ | |__ | | ___  ___");
    console.log(" |  _ < / _ \\| '_ \\| '__/ _ \\| '_ \\| |/ _ \\/ __|");
    console.log(" | |_) | (_) | |_) | | | (_) | |_) | |  __/\\__ \\");
    console.log(" |____/ \\___/|_.__/|_|  \\___/|_.__/|_|\\___||___/");
    console.log("");
});
