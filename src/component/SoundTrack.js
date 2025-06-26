import { useEffect, useRef, useState } from "react"
import PlayCircle from "@mui/icons-material/PlayCircle";
import PauseCircle from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNext from "@mui/icons-material/SkipNext";
import axios from 'axios';

function SoundTrack(){

    const [audioData, setAudioData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        const fetchAudio = async () => {
            const audioJson = '/json/audio.json';
            try{
                const response = await fetch(audioJson);
                const data = await response.json();
                setAudioData(data);
            } catch(error) {
                alert("에러", error)
            }
        }
        fetchAudio();
    },[]);

    const goToPrev = () => {
        const audio = audioRef.current;
        audio.pause();
        setIsPlaying(false);        
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : audioData.length - 1;
            return newIndex;
        });
    }

    const goToNext = () => {
        const audio = audioRef.current;
        audio.pause();
        setIsPlaying(false);
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex < audioData.length - 1 ? prevIndex + 1 : 0;
            return newIndex;
        });
    }

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const togglePlay = () =>{
        const audio = audioRef.current;
        if( audio.paused){
            audio.play();
            setIsPlaying(true);
        }else{
            audio.pause();
            setIsPlaying(false);
        }
    }

    const currentTrack = audioData[currentIndex];
    return(
        <section className="sound-content">
            <div className="title">
                <h2>사운드 트랙</h2>
                <p>트랙 제목</p>
            </div>
            
            <div className="track-wrap">
                <div className="inner">
                    <div className="play-wrap">
                        <div className="current-track">
                            <div className={`track-list`}>
                                {currentTrack && (
                                    <div className="track-active">
                                            <img 
                                                src={currentTrack.lp} 
                                                className={isPlaying ? 'spin' : 'paused'}
                                                alt={`Track ${currentIndex + 1}`}
                                            />
                                            <audio ref={audioRef} src={currentTrack.src}></audio>
                                            <span className="ep"></span>
                                        </div>
                                )}
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <button onClick={goToPrev}><SkipPreviousIcon /></button>
                            <button onClick={togglePlay}>
                                {isPlaying ? <PauseCircle style={{ fontSize: '50px'}}/> : <PlayCircle style={{ fontSize: '50px'}}/>}
                            </button>
                            <button onClick={goToNext}><SkipNext /></button>
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