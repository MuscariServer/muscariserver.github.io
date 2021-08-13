import { motion } from "framer-motion";

function Forest() {
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
            }}
            exit={{
                opacity: 0
            }}>
            <div style={{
                backgroundImage: `url(images/dimension/twilight.png)`,
                display: 'inline-block',
                textAlign: 'left',
                verticalAlign: 'bottom',
                width: '1000px',
                height: '600px',
            }}>
                <div style={{
                    textAlign: 'right',
                    margin: '1em',
                }} className="shadow">
                    <h2>リセット: あり</h2>
                </div>
                <div style={{
                    textAlign: 'left',
                    verticalAlign: 'bottom',
                    position: 'absolute',
                    bottom: '30px',
                    margin: '10px',
                }} className="shadow">
                    <h1>黄昏の森</h1>
                    日の出が訪れないモンスターの魔窟と化した不思議なディメンション。<br />
                    モンスター達は建物を築いてプレイヤーの挑戦を待っている...
                </div>
            </div>
        </motion.div>
    );
}

export default Forest;