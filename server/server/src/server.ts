// Developed by KiranPatil


// lib/server.ts
import app from "./app";
// tslint:disable-next-line:typedef
// const PORT = process.env.PORT;
const PORT = process.env.PORT || 3338;

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
