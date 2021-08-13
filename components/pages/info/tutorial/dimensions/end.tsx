import { motion } from "framer-motion";

function End() {
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
                backgroundImage: `url(images/dimension/end.png)`,
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
                    <h1>エンド</h1>
                    HeatandClimateの気候システムにより<br />
                    全域でダメージを受けるので注意してください。
                </div>
            </div>
        </motion.div>
    );
}

export default End;