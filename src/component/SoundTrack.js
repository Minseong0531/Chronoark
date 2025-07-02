import { useEffect, useRef, useState } from "react"
import PlayCircle from "@mui/icons-material/PlayCircle";
import PauseCircle from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNext from "@mui/icons-material/SkipNext";
import axios from "axios";

function SoundTrack(){

    const [audioData, setAudioData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // 경로 앞에 PUBLIC_URL 붙여주는 함수
    const fixPath = (path) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        return `${process.env.PUBLIC_URL}/${path.replace(/^\/+/, "")}`;
    };

    useEffect(()=>{
        const fetchAudio = async () => {
            const audioJson = `${process.env.PUBLIC_URL}/json/audio.json`;
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
        if(audio) audio.pause();
        setIsPlaying(false);        
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : audioData.length - 1;
            return newIndex;
        });
    }

    const goToNext = () => {
        const audio = audioRef.current;
        if(audio) audio.pause();
        setIsPlaying(false);
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex < audioData.length - 1 ? prevIndex + 1 : 0;
            return newIndex;
        });
    }

    const togglePlay = () =>{
        const audio = audioRef.current;
        if(!audio) return;
        if(audio.paused){
            audio.play();
            setIsPlaying(true);
        }else{
            audio.pause();
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        const audio = audioRef.current;
        const circle = progressRef.current;
        const radius = 90;
        const circumference = 2 * Math.PI * radius;
        
        if (circle) {
            circle.style.strokeDasharray = `${circumference}`;
            circle.style.strokeDashoffset = `${circumference}`;
        }

        const updateProgress = () => {
            if (!audio || !circle) return;
            const progress = audio.currentTime / audio.duration || 0;
            const offset = circumference - progress * circumference;
            circle.style.strokeDashoffset = offset;
        };

        audio?.addEventListener('timeupdate', updateProgress);
        return () => {
            audio?.removeEventListener('timeupdate', updateProgress);
        };
    }, [currentIndex]);

    const currentTrack = audioData[currentIndex];

    return(
        <section id="sound-content">
            <div className="track-wrap"
                 style={{
                    backgroundImage: currentTrack ? `url(${fixPath(currentTrack.bg)})` : "none",
                    backgroundSize : 'cover',
                    backgroundPosition :'center',
                    backgroundRepeat: 'no-repeat'
                 }}>
                    <div className="title">
                        <h2>사운드 트랙</h2>
                        <span>{currentTrack ? currentTrack.name : ''}</span>
                    </div>

                    <div className="play-wrap">
                        <div className={`track-list`}>
                            {currentTrack && (
                                <div className="track-active">
                                    <div className="img-wrap">
                                        <img 
                                            src={fixPath(currentTrack.lp)} 
                                            className={isPlaying ? 'spin' : 'paused'}
                                            alt={`Track ${currentIndex + 1}`}
                                        />
                                    </div>
                                    <audio ref={audioRef} src={fixPath(currentTrack.src)}></audio>
                                    <div className="ep-progress">
                                        <svg width="184" height="184">
                                            <circle
                                            className="progress-bg"
                                            cx="92"
                                            cy="92"
                                            r="90"
                                            stroke="#ffffff"
                                            strokeWidth="4"
                                            fill="none"
                                            opacity='0.4'
                                            />
                                            <circle
                                            ref={progressRef}
                                            className="progress-ring"
                                            cx="92"
                                            cy="92"
                                            r="90"
                                            stroke="#FFA500"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeLinecap="round"
                                            />
                                        </svg>
                                        <span
                                            className="ep"
                                            style={{
                                            backgroundImage: currentTrack ? `url(${fixPath(currentTrack.ep)})` : "none",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat"
                                            }}
                                        ></span>
                                    </div>
                                </div>
                            )}
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
        </section>
    )
}

export default SoundTrack;