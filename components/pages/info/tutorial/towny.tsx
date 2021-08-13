import { motion } from "framer-motion";

function Towny() {
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
            <a href="https://github.com/TownyAdvanced/Towny/wiki"><h1>Towny Wiki</h1></a>
        </motion.div>
    );
}

export default Towny;