import { motion } from "framer-motion";
import { fixPath } from "../utils/PathUtils";
function Universe(){
    const enemyItem = [

        {id:6, src:'images/enemy/witch.png', alt:'witch'},
        {id:5, src:'images/enemy/dulahan.png', alt:'dulahan'},
        {id:4, src:'images/enemy/joker.png', alt:'joker'},
        {id:3, src:'images/enemy/twin2.png', alt:'twin2'},
        {id:2, src:'images/enemy/twin1.png', alt:'twin1'},
        {id:1, src:'images/enemy/death.png', alt:'death'},
    ]
    const itemContainer = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5 // 자식요소 0.5초 지연
          }
        }
      };
    const item = {
        hidden:{opacity:0},

        show:{opacity:1,
            transition:{
                duration:1
            }
        }
    }

    return (
        <section id="universe">
          <div className="title">
            <h2>세계관</h2>
          </div>
          <div className="contents-wrap">

          
          <motion.div
            className="enemy-container"
            style={{position:'relative', display:'flex', flex:'1 1 0'}}
            variants={itemContainer}
            initial="hidden"
            animate="show"
          >
            {enemyItem.map((enemy, idx) => (
              <motion.div key={idx} variants={item} className={enemy.alt} style={{zIndex:`${enemy.id}`}}>
                <img src={fixPath(enemy.src)} alt={enemy.alt}/>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-wrap">
            <p>
            오래전 세계는 검은 안개로 뒤덮이고, <br />
            뒤틀리기 시작했다.
            </p>
            <p>
            안개에서 튀어나오는 모든 것이  <br />
            사람들을 공격하기 시작하여  <br />
            더 이상 사람이 살 수 없게 되었다.
            </p>
            <p>
            이 세계에서 유일하게 안전한 곳은  <br />
            공중 섬 <strong>‘방주’</strong>밖에 없다. 
            </p>
            <p>
            그러던 도중 주인공 루시는  <br />
            방주 아래 뒤틀린 땅에서 눈을 뜨게 된다.
            </p>
            <p>
            <strong>‘방주’</strong>에 있는 시계탑을 가동하라는
            알 수 없는 기억만 남은 채...
            </p>
          </div>
        </div>
        </section>
      );
}

export default Universe;