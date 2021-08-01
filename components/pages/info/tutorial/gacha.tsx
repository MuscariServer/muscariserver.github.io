import { motion } from "framer-motion";

function TurnGacha() {
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
                backgroundImage: `url(images/hobby/ggg.png)`,
                display: 'inline-block',
                textAlign: 'left',
                verticalAlign: 'bottom',
                width: '1000px',
                height: '600px',
            }}>
                <div style={{
                    textAlign: 'left',
                    verticalAlign: 'bottom',
                    position: 'absolute',
                    bottom: '30px',
                    margin: '10px',
                }} className="shadow">
                    <h2>ガチャの回し方</h2>
                    カジノワールドで回すことができます。費用は1回10コインです。<br />
                    コインは投票報酬、アスレチックなどで入手できます。<br />
                </div>
            </div>
        </motion.div>
    );
}

export default TurnGacha;