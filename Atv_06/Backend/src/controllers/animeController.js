const { json } = require('express');
const animeService = require('../services/animeService');

class AnimeController {
    getAll(request, response) {
        const animes = animeService.getAllAnimes();
        response.json(animes);
    }

    getById(request, response) {
        const id = request.params.id;
        const anime = animeService.getAnimeById(id);
        if (anime) {
            response.json(anime);
        } else {
            response.status(404).json({ message: 'Anime not found!' });
        }
    }

    add(request, response) {
        const newAnime = animeService.addAnime(request.body);
        if (newAnime) {
            response.status(201).json(newAnime);
        }
    }

    update(request, response) {
        const id = request.params.id;
        const updatedAnime = animeService.updateAnime(id, request.body);
        if (updatedAnime) {
            response.json(updatedAnime);
        } else {
            response.status(404).json({ message: 'Anime not found!' });
        }
    }

    delete(request, response) {
        const id = request.params.id;
        animeService.deleteAnime(id);
        response.json({ message: 'Anime successfully deleted!' });
    }
}

module.exports = new AnimeController();