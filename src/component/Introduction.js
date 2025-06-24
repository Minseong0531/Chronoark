import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import "swiper/css";
import { Pagination } from 'swiper/modules';

function Introduction(){

    const slideContent = [
        {id:"1", src:"/images/logo/Poster1.png", alt:'슬라이드1 배경', title:'게임소개', subtitle:'세계를 복구 시키기 위한 여정', text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'},
        {id:"2", src:"/images/logo/Poster1.png", alt:'슬라이드1 배경', title:'게임소개2', subtitle:'세계를 복구 시키기 위한 여정',  text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'},
        {id:"3", src:"/images/logo/Poster1.png", alt:'슬라이드1 배경', title:'게임소개3', subtitle:'세계를 복구 시키기 위한 여정',  text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'},
        {id:"4", src:"/images/logo/Poster1.png", alt:'슬라이드1 배경', title:'게임소개4', subtitle:'세계를 복구 시키기 위한 여정',  text:'덱 빌딩, 로그라이크 RPG 크로노아크 동료들과 파티를 꾸려 뒤틀린 세계를 구하세요.'}
    ]

    return(
        <section>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {
                    slideContent.map((content)=>(
                        <SwiperSlide key={content.id}>
                            <div className="bg-wrap" style={{position:'relative'}}>
                                <img src={content.src}/>
                            </div>
                            <div className="title"  style={{position:'absolute', top:'0', color:'#fff'}}>
                                {content.title}
                            </div>
                            <div className="text-wrap" style={{position:'absolute', bottom:'50px', color:'#fff'}}>
                                <strong>{content.subtitle}</strong>
                                <p>{content.text}</p>
                            </div>
                        </SwiperSlide>
                    ))
                    
                }
                    
                </Swiper>
            

        </section>
    )
}

export default Introduction