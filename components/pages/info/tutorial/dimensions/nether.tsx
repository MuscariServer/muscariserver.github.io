import { motion } from "framer-motion";

function Nether() {
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
        >
            <div style={{
                backgroundImage: `url(images/dimension/nether.png)`,
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
                    <h1>ネザー</h1>
                    HeatandClimateの気候システムにより<br />
                    一部地域でダメージを受けるので注意してください。
                </div>
            </div>
        </motion.div>
    );
}

export default Nether;