import { motion } from "framer-motion";
import Banned from "./graph/banned";
import MuscariumGraph from "./graph/muscarium";

function Stats() {
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
            <h1>ムスカリ統計局</h1>
            <div style={{
                padding: '1em',
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '5px',
            }}>
                <div style={{
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '1em'
                }}>
                    <h2>ムスカリウム価格の推移</h2>
                    <MuscariumGraph />
                </div>
                <div style={{
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '1em'
                }}>
                    <h2>累計Ban者数</h2>
                    <Banned />
                </div>
            </div>
            <h1>累計参加者数: 54人!</h1>
        </motion.div>
    );
}

export default Stats;