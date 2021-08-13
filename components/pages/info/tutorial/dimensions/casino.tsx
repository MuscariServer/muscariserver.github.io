import { motion } from "framer-motion";

function Casino() {
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
                backgroundImage: `url(images/dimension/casino.png)`,
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
                    <h2>リセット: なし</h2>
                </div>
                <div style={{
                    textAlign: 'left',
                    verticalAlign: 'bottom',
                    position: 'absolute',
                    bottom: '30px',
                    margin: '10px',
                }} className="shadow">
                    <h1>カジノ</h1>
                    カジノのゲームができるワールドです。<br />
                    お金を賭けることができます。
                </div>
            </div>
        </motion.div>
    );
}

export default Casino;