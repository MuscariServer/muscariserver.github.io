import { motion } from "framer-motion";
import Image from 'next/image'

function Slot() {
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
                backgroundImage: `url(images/hobby/sll.png)`,
                display: 'inline-block',
                textAlign: 'left',
                verticalAlign: 'bottom',
                width: '1000px',
                height: '600px',
            }}>
                <div className="image-right">
                    <Image src="images/hobby/slot.png" width='auto' height='auto'/>
                </div>
                <div style={{
                    textAlign: 'left',
                    verticalAlign: 'bottom',
                    position: 'absolute',
                    bottom: '30px',
                    margin: '10px',
                }} className="shadow">
                    <h2>スロットマシン</h2>
                    ２種類のスロットマシンがあり、一人でも楽しめます。<br />
                    ・ノーマル 最高100倍。スペードに比べて安定している。<br />
                    ・スペード 最高500倍。倍率が低い絵柄が多い。<br />
                </div>
            </div>
        </motion.div>
    );
}

export default Slot;