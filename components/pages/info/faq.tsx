import { motion } from "framer-motion";

function FAQ() {
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
            <h1>よくある質問</h1>
            当サーバーのFAQは2回以上お問合わせフォームで寄せられた質問のみ掲載します。<br />
            質問はまだありません。
        </motion.div>
    );
}

export default FAQ;