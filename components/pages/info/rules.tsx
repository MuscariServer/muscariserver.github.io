import { motion } from "framer-motion";

function Rules() {
    return (
        <motion.div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '1em',
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
            <h1>ルール</h1>
            <div style={{
                textAlign: 'left',
                display: 'inline-block',
            }}>
                <h2>第０条(推奨事項)</h2>
                <ul>
                    <li>初参加時＆参加/退出時の挨拶</li>
                    <li>バグを発見した際のDiscordの"意見・質問・不具合"チャンネルへの報告</li>
                </ul>
                <h2>第１条(禁止事項)</h2>
                <ul>
                    <h3>第１項(快適に過ごすために)</h3>
                    <li>故意にサーバーに負荷をかける行為</li>
                    <li>チャット等での非道徳的な発言、誹謗中傷</li>
                    <li>卑猥・差別要素を含むスキンの使用、建築</li>
                    <li>チャットスパム(連続投稿)</li>
                    <li>過剰な宣伝</li>
                    <li>他人の所有物の窃盗・破壊</li>
                    <li>他者を騙してアイテムやお金を奪い取る詐欺行為</li>
                </ul>
                <ul>
                    <h3>第２項(ゲームバランスの維持)</h3>
                    <li>ディメンションを通過するゲート、アイテムの作成禁止</li>
                    <li>取引が禁止されているアイテムの取引、譲渡、受け取りをする行為</li>
                    <li>複数人でのアイテムの優遇する行為(特定の人物に対して大幅な値下げまたは譲渡する等)</li>
                    <li>故意によるバグ、不具合の利用の禁止</li>
                    <li>連打・マクロ系ツール、それに準ずるmodの使用</li>
                    <li>放置を助長させるような機構を作成しようとする行為</li>
                    <li>既知のバグを発生させようとする行為</li>
                    <li>MuscariServerModpack及び推奨されているもの以外のMODの導入※1</li>
                    <li>複数アカウントの使用</li>
                    <br />
                </ul>
            </div>
            <div style={{
                textAlign: 'left',
                display: 'inline-block',
                verticalAlign: 'top',
            }}>
                <h2>第２条(補填)</h2>
                <ul>
                    <li>プレイヤーの過失、窃盗・破壊による補填は一切行いません</li>
                    <li>Modのバグ等によるアイテムの紛失があった場合は補填を行います</li>
                </ul>
                <h2>第３条(処置)</h2>
                <ul>
                    <li>経済関連の禁止事項を行った場合、所持金の1/2を没収させて頂きます。</li>
                    <li>経済関連以外の禁止事項を行った場合、運営陣の裁量により処罰の内容が決定されます。</li>
                </ul>
            </div>
            <div style={{
                textAlign: 'left',
                display: 'block',
                verticalAlign: 'top',
            }}>
                <div style={{
                    display: 'inline-block',
                }}>
                    ※2 Discordで運営にかけあうことで許可が降りる場合もあります<br />
                </div>
            </div>
        </motion.div>
    );
}

export default Rules;