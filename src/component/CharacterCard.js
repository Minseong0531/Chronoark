import {Swiper, SwiperSlide} from 'swiper/react';
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { fixPath } from "../utils/PathUtils";


function CharacterCard(){
    const [characterData, setCharacterData] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const swiperRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    
    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    useEffect(()=>{
        const fetchCharacter = async () => {
            const characterJson = `${process.env.PUBLIC_URL}/json/character.json`;
            try{
                const response = await axios.get(characterJson);
                setCharacterData(response.data);
            } catch(error) {
                alert("에러", error)
            }
        }
        fetchCharacter();
    },[])

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.activeIndex !== tabIndex) {
          swiperRef.current.slideTo(tabIndex);
        }
      }, [tabIndex]);

      useEffect(() => {
        console.log('swiperRef.current', swiperRef.current)
        console.log('tabIndex 변경:', tabIndex);
      }, [tabIndex]);

    return(
        <section id='character-card'>
            <div id='black-bg'></div>
            <div className='title'>
                <h2>캐릭터 소개</h2>
            </div>
            <Tabs className="chr_wrap" 
                    selectedIndex={tabIndex} 
                    onSelect={(index) => {
                        setTabIndex(index);
                        swiperRef.current?.slideTo(index);
                      }}>
                <TabList className="tabs">
                    <Swiper
                        direction={isDesktop ? 'vertical' : 'horizontal'}
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        className="mySwiper"
                        onSlideChange={(swiper) => {
                            if (swiper.activeIndex !== tabIndex) {
                              setTabIndex(swiper.activeIndex);
                            }
                          }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            swiper.slideTo(tabIndex);
                          }}
                    >
                    {characterData.map((item, index) => (
                        <SwiperSlide 
                            key={item.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTabIndex(index);
                                swiperRef.current?.slideTo(index);
                              }}
                            >
                        <Tab>
                            <img src={fixPath(item.thumb)} alt={`${item.name} 아이콘`} />
                        </Tab>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </TabList>
                {
                    characterData.map((item)=>(
                        <TabPanel key={item.id}>
                            <div className='tab-item'>
                                <div className='chr_view'>
                                    <div className='img-wrap'>
                                        <img src={fixPath(item.view ? item.view[0] : "")} alt='캐릭터 이미지' className={item.view ? item.view[2] : ''}/>
                                    </div>
                                    <div className='bg'>
                                        <img src={fixPath(item.view ? item.view[1] : "")} alt='캐릭터 배경 이미지'/>
                                    </div>
                                    <div className='label-wrap' style={{background:item.color}}>
                                        <strong>{item.view ? item.view[2] : ''}</strong>
                                    </div>
                                </div>
                                
                                <div className='text-wrap'>
                                    <div className='chr-title'>
                                        <h3>{item.name}</h3>
                                        <img src={fixPath(item.type)} alt={`${item.name} 타입 아이콘`}/>
                                        <p>{item.keyword}</p>
                                    </div>
                                    <div className='chr-story'>
                                        {
                                            item.description.map((text,index)=>(
                                                <p key={index}>{text}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='skill'>
                                        {
                                            item.skill.map((skill, index)=>(
                                                <img key={index} src={fixPath(skill)} alt={`${item.name} 스킬 ${index + 1}`} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    ))
                }
            </Tabs>
        </section>
    )
}

export default CharacterCard;