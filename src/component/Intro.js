import { Link } from "react-router-dom";

const dlcItem = [
    {src:'/images/contents/High_Roller.jpg', alt:'High_Roller'},
    {src:'/images/contents/Summer_Twilight.jpg', alt:'Summer_Twilight'}
]

function Intro(){
    return(
            <section id='intro'>
                <div className='title'>
                    <h2>크로노아크</h2>
                    <span>세계를 복구시키기 위한 여정</span>
                </div>
                {/* <iframe width="330" height="190" src="https://www.youtube.com/embed/VcpFkwBUkIU?si=COmoyCd7wzaD5dhO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                <div className="intro-contents">
                    <div className="first-item">
                        <img src="/images/contents/Officail_release.png" />
                    </div>
                    <ul className="second-item">
                        <li><Link to="">Steam</Link></li>
                        <li><Link to="">Nintendo</Link></li>
                        <li><Link to="">Stove</Link></li>
                    </ul>
                    <div className="dlc-item">
                        {
                            dlcItem.map((item, idx)=>(
                                <img src={item.src} alt={item.alt} key={idx}/>
                            ))
                        }
                    </div>
                </div>
            </section>
    )
}

export default Intro;