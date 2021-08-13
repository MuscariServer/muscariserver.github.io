import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Support() {
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
                textAlign: 'left',
                bottom: '30px',
                margin: '10px',
                fontSize: '1.5em',
            }} className="shadow">
                <h1>Twitter</h1>
                MuscariServer公式Twitterのプレゼント企画ツイートをフォロー&RTで抽選でプレゼントが貰えます。<br />
                受け取り方法<br />
                1.ゲーム内で/twitter set "@から始まるユーザー名"　例：/twitter set @taisa_ism と入力する。<br />
                2.Discordで抽選結果が発表されたらFTBQuestsの「受信箱」にプレゼントが届いているので受け取る。<br />
                <h1>Youtube / niconico</h1>
                Discordの動画チャンネルにMuscariServer関連の動画を貼るとガチャを回せるコイン10枚が貰えます。<br />
                条件<br />
                1.タイトルに「MuscariServer」が入っていること。<br />
                2.生放送アーカイブでないこと。/ 無編集垂れ流し動画でないこと。<br />
            </div>
        </motion.div>
    );
}

export default Support;