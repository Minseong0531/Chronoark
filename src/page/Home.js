import CharacterCard from "../component/CharacterCard"
import Intro from "../component/Intro"
import Introduction from "../component/Introduction"
import SoundTrack from "../component/SoundTrack"
import Universe from "../component/Universe"

function Home(){
    return(
        <main>
            <Intro />
            <Universe />
            <CharacterCard />
            <Introduction />
            <SoundTrack />
        </main>
    )
}

export default Home