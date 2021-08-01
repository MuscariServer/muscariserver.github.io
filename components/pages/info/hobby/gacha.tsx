import { motion } from "framer-motion";

function Gacha() {
    return (
        <motion.div style={{
            padding: '1em',
            width: '100%',
            height: '100%',
        }}
            animate={{
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}>
            <div style={{
                backgroundImage: `url(images/hobby/ggg.png)`,
                display: 'inline-block',
                textAlign: 'left',
                verticalAlign: 'bottom',
                width: '1000px',
                height: '600px',
            }}>
                <div style={{
                    textAlign: 'left',
                    verticalAlign: 'bottom',
                    position: 'absolute',
                    bottom: '30px',
                    margin: '10px',
                }} className="shadow">
                    <h2>ガチャ</h2>
                    投票の報酬で貰えるコイン10個で1回ガチャを回せます。<br />
                    Tech LootbagとMagic Lootbagの2種類あり、<br />
                    取得したスキルツリーに合わせてガチャを回せます。<br />
                </div>
            </div>
        </motion.div>
    );
}

export default Gacha;