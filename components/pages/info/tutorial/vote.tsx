import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Vote() {
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
                textAlign: 'left',
                bottom: '30px',
                margin: '10px',
                fontSize: '1.5em',
            }} className="shadow">
                monocraftまたはJapan Minecraft Serversで投票することにより、<br />
                １日１回報酬を受け取ることができます。<br />
                Voting Reward(投票報酬)はFTBQuestsの「投票」でアイテムと引き換えることができます。<br />
                <Link to="/links"><h1>ここから投票</h1></Link>
            </div>
        </motion.div>
    );
}

export default Vote;