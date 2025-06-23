import {Swiper, SwiperSlide} from 'swiper/react';
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigation, Pagination } from 'swiper/modules';
import 'react-tabs/style/react-tabs.css';
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
    console.log(characterData)
    

    return(
        <section>
            <div className='title'>
                <h2>캐릭터 소개</h2>
                        <Tabs>
                            <TabList className="tabs">
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
                                            {
                                            
                                            
                                            }
                                            <img src={(item.view) ? item.view[0] :""} style={{height:'466px', width:'auto'}}/>
                                            <div className='label-wrap' style={{width:'350px', height:'50px', background:item.color}}>
                                                <strong>{item.view[2]}</strong>
                                            </div>
                                        </div>
                                    </TabPanel>
                                ))
                            }
                            
                            
                        </Tabs>
            </div>
        </section>
    )
}

export default CharacterCard


