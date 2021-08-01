import { motion } from "framer-motion";

function Capture() {
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
                backgroundImage: `url(images/dimension/capture.png)`,
                display: 'inline-block',
                backgroundSize: 'cover',
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
                    <h1>攻略</h1>
                    攻略重視のワールド。<br/>
                    建築に自信がない人やmodでたくさん遊びたい人向け。
                </div>
            </div>
        </motion.div>
    );
}

export default Capture;