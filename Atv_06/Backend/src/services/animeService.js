const { response } = require('../../app');
const Anime = require('../models/animeModel');
const animeRepository = require('../repositories/animeRepository');
const { v4: uuidv4 } = require('uuid');

class AnimeService {
    getAllAnimes() {
        return animeRepository.getAll();
    }

    getAnimeById(id) {
        return animeRepository.getById(id);
    }

    addAnime(data) {
        const { name, genre, studio } = data;
        if ((!name || name === '') || (!genre || genre === '') || (!studio || studio === '')) {
            return { error: 'Fill up all the inputs!' };
        }
        const newAnime = new Anime(uuidv4(), name, genre, studio);
        return animeRepository.create(newAnime);
    }

    updateAnime(id, data) {
        return animeRepository.update(id, data);
    }

    deleteAnime(id) {
        return animeRepository.delete(id);
    }
}

module.exports = new AnimeService();