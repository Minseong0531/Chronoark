import { useRef, useState } from "react"

function SoundTrack(){
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () =>{
        const audio = audioRef.current;
        if( audio.paused){
            audio.play();
            setIsPlaying(true);
        }else{
            audio.play();
            setIsPlaying(false);
        }
    }
    return(
        <section>
            <div className="track-wrap">
                <div className="inner">
                        <h2>사운드트랙</h2>
                    <div className="play-wrap">
                        <div className="current-track">
                            <div className="play-bg" style={{height:'300px', width:'300px'}}>
                                <img src="/images/contents/lp_red.png" alt="void" className={isPlaying ? 'spin' : 'paused'}/>
                                <audio ref={audioRef} src='/'></audio>
                                <button onClick={togglePlay}>
                                    {isPlaying ? 'Pause Music' : 'Play Music'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SoundTrack