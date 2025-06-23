import CharacterCard from "../component/CharacterCard"
import Intro from "../component/Intro"
import Universe from "../component/Universe"

function Home(){
    return(
        <main>
            <Intro />
            <Universe />
            <CharacterCard />
        </main>
    )
}

export default Home