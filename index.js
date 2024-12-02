import express from "express";

import cors from "cors";
import { postRoutes } from "./Router/postRoute.js";
import { CommentRoutes } from "./Router/commentRoutes.js";
import { albumRoutes } from "./Router/albumsRoutes.js";
import { photosRoutes } from "./Router/photosRoutes.js";
import { todosRoutes } from "./Router/todosRoutes.js";
import { userRoutes } from "./Router/userRoutes.js";

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Malik Api",
    github: "https://github.com/umermalik053",
    Passion: "Developer",
  });
});

app.use("/", postRoutes);
app.use("/", CommentRoutes);
app.use("/", albumRoutes);
app.use("/", photosRoutes);
app.use("/", todosRoutes);
app.use("/", userRoutes);


app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
