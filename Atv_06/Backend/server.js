// const { request, response } = require('express');
const app = require('./app');
const port = 3333;
const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');

app.use(cors());

app.listen(port, () => {
    console.log(`Server ON! Running at http://localhost:${port}`);
});

const animeController = require('./src/controllers/animeController');

app.get('/animes', animeController.getAll);
app.get('/animes/:id', animeController.getById);
app.post('/animes/', animeController.add);
app.put('/animes/:id', animeController.update);
app.delete('/animes/:id', animeController.delete);

// const animes = [
//     {
//         id: uuidv4(),
//         name: 'Neon Genesis Evangelion',
//         genre: 'Mecha/Drama/Apocalíptico/Ficção Científica',
//         studio: 'Gainax Tatsunoko'
//     },
//     {
//         id: uuidv4(),
//         name: 'Cowboy Bebop',
//         genre: 'Ação/Aventura/Drama/Ficção Científica',
//         studio: 'Sunrise'
//     },
//     {
//         id: uuidv4(),
//         name: 'Berserk',
//         genre: 'Fantasia/Épico/Horror/Drama',
//         studio: 'OLM'
//     }
// ]

// app.get('/animes', (request, response) => response.status(200).json({ animes }));

// app.get('/animes/:id', (request, response) => {
//     const { id } = request.params;
//     const foundAnime = animes.find((anime) => anime.id == id);

//     if (!foundAnime) {
//         return response.status(404).json({ message: 'Anime não encontrado!' });
//     }

//     response.status(200).json({ foundAnime });
// });

// app.post('/animes', (request, response) => {
//     const { name, genre, studio } = request.body;

//     if ((!name || name === '') || (!genre || genre === '') || (!studio || studio === '')) {
//         return response.status(400).json({ message: 'Campos inválidos!' });
//     }

//     const newAnime = {
//         id: uuidv4(),
//         name: name,
//         genre: genre,
//         studio: studio
//     };

//     animes.push(newAnime);
//     response.status(201).json({ anime: newAnime });
// })

// app.put('/animes/:id', (request, response) => {
//     const { id } = request.params;
//     const { name, genre, studio } = request.body;

//     if ((!name || name === '') && (!genre || genre === '') && (!studio || studio === '')) {
//         return response.status(400).json({ message: 'Campos inválidos!' });
//     }

//     const updateAnime = animes.find((anime) => anime.id == id);

//     if (!updateAnime) {
//         return response.status(404).json({ message: 'Anime não encontrado!' });
//     }

//     if (name !== '') updateAnime.name = name;
//     if (genre !== '') updateAnime.genre = genre;
//     if (studio !== '') updateAnime.studio = studio;

//     response.status(200).json({ updateAnime });
// })

// app.delete('/animes/:id', (request, response) => {
//     const { id } = request.params;
//     const deleteAnime = animes.findIndex((anime) => anime.id === id);

//     if (deleteAnime === -1) {
//         return response.status(404).json({ message: 'Anime não encontrado!' });
//     }

//     animes.splice(deleteAnime, 1);

//     response.status(200).end();
// })