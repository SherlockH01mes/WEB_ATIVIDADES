import animes from '../database/server.js'; 

import { uuid } from 'uuidv4';
async function getAnime(request, response){
    return response.json(animes);
}
function createAnime(request, response){
    const { name, genre, studio } = request.body;
    const id = uuid();
    try{
        animes.push({
        id,
        name,
        genre,
        studio});
    }catch(error){
        return response.status(400).json({error: "Error creating anime!"});
    }
    return response.status(200).json({message: "Anime created successfully!"});
}
function updateAnime(request, response){
    const id = request.params.id;
    const { name, genre, studio } = request.body;
    const animeIndex = animes.findIndex(anime => anime.id == id);
    if(animeIndex < 0){
        return response.status(404).json({error: "Anime not found!"});
    }
    try{
        animes[animeIndex] = {
            id,
            name,
            genre,
            studio
        };
    }catch(error){
        return response.status(400).json({error: "Error updating anime!"});
    }
    return response.status(200).json({message: "Anime updated successfully!"});
}
async function deleteAnime(request, response){
    const id = request.params.id;
    const animeIndex = animes.findIndex(anime => anime.id == id);
    if(animeIndex < 0){
        return response.status(404).json({error: "Anime not found!"});
    } 
    try{
        element = animes.splice(animeIndex, 1);
    }catch(error){
        return response.status(400).json({error: "Error deleting anime!"});
    }
    return response.status(200).json({message: "Anime deleted successfully!"});
}
export { getAnime, createAnime, updateAnime, deleteAnime };