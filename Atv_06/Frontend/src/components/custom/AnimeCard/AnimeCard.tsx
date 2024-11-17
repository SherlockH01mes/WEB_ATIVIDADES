import { AnimeType } from "@/types/Anime"
import { Button, Card } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface AnimeCardProps {
    anime: AnimeType
}

export function AnimeCard({
    anime: { id, name, genre, studio },
}: AnimeCardProps) {

    return (
        <>
            <Link to={`/${id}`}>
                <Card.Root width="320px" height="500px">
                    <Card.Body gap="2">
                        <Image
                            rounded="md"
                            src="https://pt.quizur.com/_image?href=https://img.quizur.com/f/img605d3c6a5bee58.75278901.jpg?lastEdited=1616723071&w=1024&h=1024&f=webp" alt="Anime random image"
                        />
                        <Card.Title mb="2">{name}</Card.Title>
                        <Card.Description>{genre}</Card.Description>
                        <Card.Description>Studio {studio}</Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button
                            className="h-10 w-20 bg-orange-500 text-white border border-white border-solid hover:bg-white hover:text-orange-500 mt-3" variant="outline"
                            >
                            Update
                        </Button>
                        <Button
                            className="h-10 w-20 bg-red-600 text-white border border-white border-solid hover:bg-white hover:text-red-600 mt-3"
                            >
                            Delete
                        </Button>
                    </Card.Footer>
                </Card.Root>
            </Link>
        </>
    )
}