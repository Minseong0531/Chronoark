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
        <section style={{position:'relative'}}>
            <div className="title" style={{position:'absolute', top:'100px', left:'50%', transform:'translateX(-50%)'}} >
                <h2>사운드 트랙</h2>
                <p>트랙 제목</p>
            </div>
            
            <div className="track-wrap" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
                <div className="inner">
                    <div className="play-wrap">
                        <div className="current-track">
                            <div className="play-bg" style={{height:'300px', width:'300px'}}>
                                <img src="/images/contents/lp_red.png" alt="void" className={isPlaying ? 'spin' : 'paused'}/>
                                <audio ref={audioRef} src='/'></audio>
                                <button onClick={togglePlay}>
                                    {isPlaying ? 'Pause Music' : 'Play Music'}
                                </button>
                            </div>
                            <img src="/images/contents/track3.png" alt="place of void" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-wrap">
                <img src="/images/map/ost_bg.png" alt="ost 배경"/>
            </div>
        </section>
    )
}

export default SoundTrack