import { Router } from "express";

import {
    getAnime,
    createAnime,
    updateAnime,
    deleteAnime,
    } from "./Controllers/AnimeController.js";

const routes = Router();

routes.get("/animes", getAnime);
routes.post("/animes", createAnime);
routes.put("/animes/:id", updateAnime);
routes.delete("/animes/:id", deleteAnime);


export default routes;