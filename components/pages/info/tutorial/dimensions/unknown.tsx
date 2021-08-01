import { motion } from "framer-motion";

function Unknown() {
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
                backgroundImage: `url(images/dimension/emptiness.png)`,
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
                    <h1>??????</h1>
                    縺昴ｉ繧偵∩縺ゅ￡繧九→<br/>
                    縺ｪ縺ｫ繧ゅ↑縺<br/>
                    縺ｪ縺ｫ繧ゅ↑縺?↑縺ｫ繧ゅ↑縺?↑縺ｫ繧ゅ↑縺?↑縺ｫ繧ゅ↑縺?↑縺ｫ繧ゅ↑縺?↑縺ｫ繧ゅ↑縺?↑縺ｫ繧ゅ↑縺<br/>
                    縺励ｍ縺ｫ縺?縺代?縺｡縺九▼縺上↑
                </div>
            </div>
        </motion.div>
    );
}

export default Unknown;