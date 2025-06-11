import express from "express";
import dotenv from "dotenv";

import usersRoute from "./routers/user.route.js";
import songsRoute from "./routers/song.route.js";
import albumsRoute from "./routers/album.route.js";
import adminRoute from "./routers/admin.route.js";
import authRoute from "./routers/auth.route.js";
import statsRoute from "./routers/stats.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use("/api/users", usersRoute);
app.use("/api/songs", songsRoute);
app.use("/api/albums", albumsRoute);
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRoute);
app.use("/api/stats", statsRoute);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})