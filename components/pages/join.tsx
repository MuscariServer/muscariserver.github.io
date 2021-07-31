import { motion } from "framer-motion";

function Join() {
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
                color: `#fff`,
                fontSize: `2rem`,
            }}
        >
            <h1>
                参加方法
            </h1>
        </motion.div>
    )
}

export default Join;