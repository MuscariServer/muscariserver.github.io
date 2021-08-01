import { motion } from "framer-motion";

function Money() {
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
            <img src="images/muscarium.png" style={{
                textAlign: 'right',
                float: 'right'
            }}></img>
            <div style={{
                textAlign: 'left',
                verticalAlign: 'bottom',
                bottom: '30px',
                margin: '10px',
                fontSize: '1.5em',
            }} className="shadow">
                資源ワールドに生成されるMuscarium鉱石を<br />鉱石買取所で買い取って貰うことが主なお金の入手方法です。<br />
                よりお金を稼ぎたい場合は、百貨店でアイテムを出品してお金を稼ぐことができます。<br />
            </div>
        </motion.div>
    );
}

export default Money;