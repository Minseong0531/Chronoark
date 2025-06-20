import { motion } from "framer-motion";

function Universe(){
    const enemyItem = [
        {id:1, src:'/images/enemy/death.png', alt:'death'},
        {id:2, src:'/images/enemy/twin1.png', alt:'twin1'},
        {id:3, src:'/images/enemy/twin2.png', alt:'twin2'},
        {id:4, src:'/images/enemy/joker.png', alt:'joker'},
        {id:5, src:'/images/enemy/dulahan.png', alt:'dulahan'},
        {id:5, src:'/images/enemy/witch.png', alt:'witch'},
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
                duration:0.5
            }
        }
    }

    return (
        <section>
          <h2>세계관</h2>
          <motion.div
            className="enemy-container"
            variants={itemContainer}
            initial="hidden"
            animate="show"
          >
            {enemyItem.map((enemy, idx) => (
              <motion.div key={idx} variants={item} className={enemy.alt}>
                <img src={enemy.src} alt={enemy.alt}/>
              </motion.div>
            ))}
          </motion.div>
        </section>
      );
}

export default Universe;