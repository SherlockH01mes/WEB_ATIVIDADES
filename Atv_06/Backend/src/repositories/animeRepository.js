const Anime = require('../models/animeModel');
const { v4: uuidv4 } = require('uuid');

let animes = [
    new Anime(
        uuidv4(),
        'Neon Genesis Evangelion',
        'Mecha/Drama/Apocalíptico/Ficção Científica',
        'Gainax Tatsunoko'
    ),
    new Anime(
        uuidv4(),
        'Cowboy Bebop',
        'Ação/Aventura/Drama/Ficção Científica',
        'Sunrise'
    ),
    new Anime(
        uuidv4(),
        'Berserk',
        'Fantasia/Épico/Horror/Drama',
        'OLM'
    )
]

class AnimeRepository {
    getAll() {
        return animes;
    }

    getById(id) {
        return animes.find(anime => anime.id === id);
    }

    create(anime) {
        anime.id = uuidv4();
        animes.push(anime);
        return anime;
    }

    update(id, updatedAnime) {
        const index = animes.findIndex(anime => anime.id === id);
        if (index !== -1) {
            const validUpdates = {};
            for (let key in updatedAnime) {
                if (updatedAnime[key] !== null
                    && updatedAnime[key] !== undefined
                    && updatedAnime[key].toString().trim() !== "") {
                    validUpdates[key] = updatedAnime[key];
                }
            }
            if (Object.keys(validUpdates).length === 0) {
                return { error: 'Not updated!' };
            }
            animes[index] = { ...animes[index], ...validUpdates };
            return animes[index];
        }
        return null;
    }

    delete(id) {
        animes = animes.filter(anime => anime.id !== id);
        return true;
    }
}

module.exports = new AnimeRepository();