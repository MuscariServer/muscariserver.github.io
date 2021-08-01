import { motion } from "framer-motion";

function BlackJack() {
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
                backgroundImage: `url(images/hobby/bj.png)`,
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
                    <h2>ブラックジャック</h2>
                    マイクラ内でブラックジャックが楽しめます。<br />
                    お金を賭けてプレイヤー同士で遊ぶことができます。<br />
                    ※テーブルのオーナーがディーラーになります。<br />　ディーラーはヒットやスタンドといった行動はできません。<br />
                </div>
            </div>
        </motion.div>
    );
}

export default BlackJack;