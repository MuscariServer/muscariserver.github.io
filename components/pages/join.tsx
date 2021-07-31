import { motion } from "framer-motion";

function JoinPage() {
    return (
        <motion.div
            animate={{
                x: 0,
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}

            style={{
                textAlign: 'center',
            }}
        >
            <div style={{
                color: `#fff`,
                fontSize: `2rem`,
            }}>
                <h1>参加方法</h1>
            </div>
        </motion.div>
    )
}

export default JoinPage;