import { motion } from "framer-motion";

function Shops() {
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
                textAlign: 'center',
                verticalAlign: 'bottom',
                bottom: '30px',
                margin: '10px',
                fontSize: '1.5em',
            }} className="shadow">
                <h1>参考動画</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/W9ErJ9sf1fc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </motion.div>
    );
}

export default Shops;