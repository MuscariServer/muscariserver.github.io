import { motion } from "framer-motion";

function Quests() {
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
                backgroundImage: `url(images/rank.png)`,
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
                    <h1>ウィークリークエスト</h1>
                    報酬付きのクエストが毎週追加されます。<br />
                    クエストはFTB Questsで確認できます。<br />
                    クエストの総達成回数はランキングでロビーに表示されます。<br />
                </div>
            </div>
        </motion.div>
    );
}

export default Quests;