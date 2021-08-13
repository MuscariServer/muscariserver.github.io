import { motion } from "framer-motion";

function Athle() {
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
            exit={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}
            exit={{
                opacity: 0
            }}>
            <div style={{
                backgroundImage: `url(images/hobby/asure.png)`,
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
                    <h2>アスレチックワールド</h2>
                    Mod要素を含めたアスレチックが楽しめます。<br />
                    初回クリアでガチャが回せるコインが獲得できます。<br />
                    まだまだ数が少ないので製作者募集中です。<br />
                </div>
            </div>
        </motion.div>
    );
}

export default Athle;