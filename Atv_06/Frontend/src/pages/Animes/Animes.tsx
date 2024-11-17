import { AnimeCard } from "@/components/custom/AnimeCard";
import api from "@/utils/api";
import { Button } from "@chakra-ui/react";
import { House } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Animes() {

    const [animes, setAnimes] = useState([])
    const [hasAnime, setHasAnime] = useState(false)

    function getAnimes() {
        api.get('/animes').then((response) => {
            console.log(response.data)
            setAnimes(response.data)
        })
        setHasAnime(true)
    }

    function addAnime() {
        //continuar..
    }

    useEffect(() => {
        getAnimes()
    }, [getAnimes])

    return (
        <>
            <div className="flex flex-col justify-center items-center h-auto gap-6">
                <Link className="relative right-[40rem] top-4" to={'/'}>
                    <House />
                </Link>
                <div className="grid grid-cols-3 gap-10">
                    {hasAnime && (
                        animes.map(anime => (
                            <AnimeCard anime={anime} />
                        ))
                    )}
                </div>
                <div className="flex justify-center items-center">
                    <Button
                        className="h-10 w-20 bg-violet-900 text-white border border-white border-solid hover:bg-white hover:text-violet-900 mt-3">
                        Add One
                    </Button>
                </div>
            </div >
        </>
    )
}