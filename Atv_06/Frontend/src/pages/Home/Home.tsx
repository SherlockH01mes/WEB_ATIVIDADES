import { Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen bg-[url('src/assets/anime.jpg')] bg-cover bg-center">
                <div className="flex flex-col justify-center items-center bg-violet-900 bg-opacity-80 h-3/4 w-1/3 rounded-md">
                    <Text className="text-3xl">Anime Database</Text>
                    <Link to={'/animes'}>
                        <Button className="h-10 w-40 bg-violet-900 text-white border border-white border-solid hover:bg-white hover:text-violet-900 mt-3">Get Started</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}