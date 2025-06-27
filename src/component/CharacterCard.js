import {Swiper, SwiperSlide} from 'swiper/react';
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CharacterCard(){
    const [characterData, setCharacterData] = useState([]);
    
    useEffect(()=>{
        const fetchCharacter = async () => {
            const characterJson = '/json/character.json';
            try{
                const response = await axios.get(characterJson);
                setCharacterData(response.data);
            } catch(error) {
                alert("에러", error)
            }
        }
        fetchCharacter();
    },[])
    return(
        <section id='character-card'>
            <div id='black-bg'></div>
                <div className='title'>
                    <h2>캐릭터 소개</h2>
                </div>
                            <Tabs className="chr_wrap">
                                <TabList className="tabs" style={{display:"flex"}}>
                                {
                                    characterData && characterData.length > 0 && (
                                    characterData.map((item)=>(
                                        <Tab key={item.id}>
                                        <img 
                                            src={item.thumb}
                                            alt={`${item.name} 아이콘`}
                                            />
                                        </Tab>
                                    ))
                                )
                                }
                                </TabList>
                                {
                                    characterData.map((item)=>(
                                        <TabPanel key={item.id}>
                                            <div className='tab-item'>
                                                <div className='chr_view'>
                                                    <img src={(item.view) ? item.view[0] :""} style={{height:'466px', width:'auto'}}/>
                                                    <div className='bg'>
                                                        <img src={item.view[1]} alt='캐릭터 배경 이미지' />
                                                    </div>
                                                    <div className='label-wrap' style={{background:item.color}}>
                                                        <strong>{item.view[2]}</strong>
                                                    </div>
                                                </div>
                                                
                                                <div className='text-wrap'>
                                                    <div className='chr-title'>
                                                        <h3>{item.name}</h3>
                                                        <img src={item.type}/>
                                                        <p>{item.keyword}</p>
                                                    </div>
                                                    <div className='chr-story'>
                                                        {
                                                            item.description.map((text,index)=>(
                                                                <p key={index}>{text}</p>
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

export default CharacterCard


