import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css";
import { EffectFade, Pagination } from 'swiper/modules';
import { fixPath } from "../utils/PathUtils";
function Introduction(){

    const slideContent = [
        {id:"1", src:"images/contents/Poster1.png", alt:'슬라이드1 배경', title:'게임소개', subtitle:'세계를 복구 시키기 위한 여정', text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'},
        {id:"2", src:"images/contents/Poster2.jpg", alt:'슬라이드2 배경', title:'게임소개2', subtitle:'세계를 복구 시키기 위한 여정',  text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'},
        {id:"3", src:"images/contents/Poster3.png", alt:'슬라이드3 배경', title:'게임소개3', subtitle:'세계를 복구 시키기 위한 여정',  text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'},
        {id:"4", src:"images/contents/Poster4.jpg", alt:'슬라이드4 배경', title:'게임소개4', subtitle:'세계를 복구 시키기 위한 여정',  text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'}
    ]

    return(
        <section id='introduction'>
            <Swiper 
                spaceBetween={30}
                pagination={true} 
                modules={[EffectFade,Pagination]} 
                effect="fade" 
                style={{width:'60%', height:'80%' }} 
                className="mySwiper">
                {
                    slideContent.map((content)=>(
                        <SwiperSlide key={content.id}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: `linear-gradient(to bottom, rgba(0,0,0,1), transparent 50%, transparent 50%, rgba(0,0,0,1))`,
                                zIndex: 1,
                                pointerEvents: 'none'
                            }} />
                            <div className="bg-wrap" style={{maxHeight:'1080px', overflow:'hidden', width:'100%', height:'960px'}}>
                                <img src={content.src} alt={content.alt} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', maxHeight:'1080px'}}/>
                            </div>
                            <div className="title" style={{position:'absolute', top:'0', color:'#fff',zIndex: 2, fontSize:'2.25rem', left:'50%', transform:'translateX(-50%)', fontWeight:'700'}}> 
                                {content.title}
                            </div>
                            <div className="text-wrap"
                                 style={{position:'absolute', bottom:'50px', left:'50%', transform:'translateX(-50%)',textAlign:'center', color:'#fff', zIndex: 2}}> 
                                <strong style={{fontSize:'2rem'}}>{content.subtitle}</strong>
                                <p style={{fontSize:'1.5rem'}}>{content.text}</p>
                            </div>
                        </SwiperSlide>
                    ))
                    
                }
                    
                </Swiper>
            

        </section>
    )
}

export default Introduction